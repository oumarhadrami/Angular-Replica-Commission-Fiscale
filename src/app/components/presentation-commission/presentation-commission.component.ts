import { Component, OnInit } from '@angular/core';
import { CommissionDescription } from 'src/app/models/commission-description';
import { Ministre } from 'src/app/models/ministre';
import { LanguageService } from 'src/app/services/language.service';
import { PresentationService } from 'src/app/services/presentation.service';

@Component({
  selector: 'app-presentation-commission',
  templateUrl: './presentation-commission.component.html',
  styleUrls: ['./presentation-commission.component.scss'],
})
export class PresentationCommissionComponent implements OnInit {
  commissionDescription?: CommissionDescription;
  ministre?: Ministre;
  currentLang?: string;

  constructor(
    private presentationService: PresentationService,
    private languageService: LanguageService
  ) {
    this.languageService.currentLang.subscribe((currentLang) => {
      this.currentLang = currentLang;
    });
  }

  ngOnInit(): void {
    this.getCommissionDescription();
    this.getMinistre();
  }

  getCommissionDescription(): void {
    this.presentationService.getCommissionDescription().subscribe(
      (respone) => (this.commissionDescription = respone),
      (error) => console.log(error)
    );
  }
  getMinistre(): void {
    this.presentationService.getMinistre().subscribe(
      (response) => (this.ministre = response),
      (error) => console.log(error)
    );
  }
}
