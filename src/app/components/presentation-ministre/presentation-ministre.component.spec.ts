import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationMinistreComponent } from './presentation-ministre.component';

describe('PresentationMinistreComponent', () => {
  let component: PresentationMinistreComponent;
  let fixture: ComponentFixture<PresentationMinistreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationMinistreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationMinistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
