import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTravelplanComponent } from './new-travelplan.component';

describe('NewTravelplanComponent', () => {
  let component: NewTravelplanComponent;
  let fixture: ComponentFixture<NewTravelplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTravelplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTravelplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
