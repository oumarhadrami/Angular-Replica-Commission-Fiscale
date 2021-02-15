import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  currentLang?: string;
  @Output() languageSwitchEvent = new EventEmitter<string>();
  
  constructor(private languageService: LanguageService) {
    this.languageService.currentLang.subscribe((currentLang) => {
      this.currentLang = currentLang;
   })
  }


  ngOnInit(): void {
  } 

  switchLang(lang: string) : void{
    this.languageSwitchEvent.emit(lang);
  }

}
