import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationLiensComponent } from './presentation-liens.component';

describe('PresentationLiensComponent', () => {
  let component: PresentationLiensComponent;
  let fixture: ComponentFixture<PresentationLiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationLiensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationLiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
