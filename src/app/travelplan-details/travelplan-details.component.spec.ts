import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelplanDetailsComponent } from './travelplan-details.component';

describe('TravelplanDetailsComponent', () => {
  let component: TravelplanDetailsComponent;
  let fixture: ComponentFixture<TravelplanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelplanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelplanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
