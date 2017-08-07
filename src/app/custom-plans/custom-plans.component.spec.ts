import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPlansComponent } from './custom-plans.component';

describe('CustomPlansComponent', () => {
  let component: CustomPlansComponent;
  let fixture: ComponentFixture<CustomPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
