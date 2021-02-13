import { Component, OnInit } from '@angular/core';
import { CommissionDescription } from 'src/app/models/commission-description';
import { PresentationService } from 'src/app/services/presentation.service';

@Component({
  selector: 'app-presentation-commission',
  templateUrl: './presentation-commission.component.html',
  styleUrls: ['./presentation-commission.component.scss'],
})
export class PresentationCommissionComponent implements OnInit {
  commissionDescription?: CommissionDescription;

  constructor(private presentationService: PresentationService) {}

  ngOnInit(): void {
    this.getCommissionDescription();
  }

  getCommissionDescription(): void {
    this.presentationService.getCommissionDescription().subscribe(
      (respone) => this.commissionDescription = respone,
      (error) => console.log(error)
    );
  }
}
