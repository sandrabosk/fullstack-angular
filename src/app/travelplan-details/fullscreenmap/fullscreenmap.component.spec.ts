import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenmapComponent } from './fullscreenmap.component';

describe('FullscreenmapComponent', () => {
  let component: FullscreenmapComponent;
  let fixture: ComponentFixture<FullscreenmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullscreenmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
