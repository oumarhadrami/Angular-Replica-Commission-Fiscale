import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlderNewsComponent } from './older-news.component';

describe('OlderNewsComponent', () => {
  let component: OlderNewsComponent;
  let fixture: ComponentFixture<OlderNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlderNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlderNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
