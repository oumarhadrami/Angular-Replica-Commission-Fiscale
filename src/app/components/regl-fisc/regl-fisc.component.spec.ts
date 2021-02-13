import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglFiscComponent } from './regl-fisc.component';

describe('ReglFiscComponent', () => {
  let component: ReglFiscComponent;
  let fixture: ComponentFixture<ReglFiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglFiscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglFiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
