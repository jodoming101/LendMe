import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar-accueil',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarAccueilComponent implements OnInit {

  constructor(public translate: TranslateService, private cookie: CookieService) {

    translate.addLangs(['en', 'fr', 'es']);

    if (this.cookie.get('lang_translat_user')) {

      const langTranslat = this.cookie.get('lang_translat_user');

      translate.setDefaultLang(langTranslat);


    }else{

    translate.setDefaultLang('en');

    }
  }

  switchLang(lang: string) {

    this.translate.use(lang);

    this.cookie.set('lang_translat_user', lang);
  }

  ngOnInit(): void {  }

}
