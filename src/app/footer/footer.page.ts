import { Component, Input, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {
  @Input() currentRoute: string;

  model: any = {};
  activetab: string = '';
  src: any = {
    activity: "assets/images/grey_footer_activity.svg",
    home: "assets/images/grey_footer_home.svg",
    volunteer: "assets/images/grey_footer_volunteer.svg"
  };
  constructor(private fetch: FetchService,
    private storage: StorageService,
    private router: Router) {
  }
  ngOnInit() {
    this.changeCurrentUrl(this.currentRoute);
    let data = { model: "QuotesModel",lang_code : JSON.parse(localStorage.getItem('lang')) }
    this.fetch.getTestimonialByLanguage(data).subscribe(async (resp) => {
			if (resp) {
				var quote = resp.data
				this.model.quotes = quote
				for (var j = 0; j < quote.length; j++) {
					var quote1 = quote[j];
				}
			}
		});
		
		localStorage.removeItem('temp_start_address');
		localStorage.removeItem('temp_end_address');
		this.model.is_volunteer = localStorage.getItem('volunteer_approve');

    this.model.key_text5 = "Home";
		this.model.key_text6 = "Activity";
		this.model.key_text7 = "Volunteer";

    var lang_code = JSON.parse(localStorage.getItem('lang'));
    let res = this.storage.getScope();
    let item5 = res.find(i => i.key_text === 'HOME');
		this.model.key_text5 = item5[lang_code];
		let item6 = res.find(i => i.key_text === 'ACTIVITY');
		this.model.key_text6 = item6[lang_code];
		let item7 = res.find(i => i.key_text === 'VOLUNTEER');
		this.model.key_text7 = item7[lang_code];
		let item8 = res.find(i => i.key_text === 'VOLUNTEER_FOOD_REQUEST');
		this.model.key_text8 = item8[lang_code];
  }

  
  changeCurrentUrl(route){
    
    if(route=='/home'){
      this.activetab = 'home';
      this.src.volunteer = "assets/images/grey_footer_volunteer.svg";
      this.src.home = "assets/images/red_footer_home.svg";
      this.src.activity = "assets/images/grey_footer_activity.svg";
    }else if(route=='/volunteer-detail'){
      this.activetab = 'volunteer';
      this.src.volunteer = "assets/images/red_footer_volunteer.svg";
      this.src.home = "assets/images/grey_footer_home.svg";
      this.src.activity = "assets/images/grey_footer_activity.svg";
    }else if(route=='/activity-normal'){
      this.activetab = 'activity';
      this.src.volunteer = "assets/images/grey_footer_volunteer.svg";
      this.src.home = "assets/images/grey_footer_home.svg";
      this.src.activity = "assets/images/red_footer_activity.svg";
    }
    if(route!==this.currentRoute){
      this.router.navigate(['/'+route]);
    }
  }
}
