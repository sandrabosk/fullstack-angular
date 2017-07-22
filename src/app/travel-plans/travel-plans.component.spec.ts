import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPlansComponent } from './travel-plans.component';

describe('TravelPlansComponent', () => {
  let component: TravelPlansComponent;
  let fixture: ComponentFixture<TravelPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
