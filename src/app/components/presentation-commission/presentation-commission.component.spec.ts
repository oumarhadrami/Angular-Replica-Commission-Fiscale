import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationCommissionComponent } from './presentation-commission.component';

describe('PresentationCommissionComponent', () => {
  let component: PresentationCommissionComponent;
  let fixture: ComponentFixture<PresentationCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationCommissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
