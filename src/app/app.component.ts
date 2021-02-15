import { Component, Inject, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    translate.addLangs(['fr', 'ar']);
    translate.setDefaultLang('fr');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    if (lang == 'ar') {
      document.getElementsByTagName('html').item(0)?.setAttribute('lang','ar');
      document.dir = 'rtl';
    } else {
      document.getElementsByTagName('html').item(0)?.setAttribute('lang','en');
      document.dir = 'ltr';
    }
  }
 }
