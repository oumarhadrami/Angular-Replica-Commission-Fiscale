import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  @Input() currentLang?: string;
  @Output() languageSwitchEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  } 

  switchLang(lang: string) : void{
    this.languageSwitchEvent.emit(lang);
  }

}
