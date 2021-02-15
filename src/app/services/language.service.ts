import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject } from 'rxjs';
import { skip } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang= new BehaviorSubject('fr');
  
  announceCurrentLang(lang: string){
    this.currentLang.next(lang);
  }


  constructor() { }
}
