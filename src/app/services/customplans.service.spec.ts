import { TestBed, inject } from '@angular/core/testing';

import { CustomPlansService } from './custom-plans.service';

describe('CustomPlansService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomPlansService]
    });
  });

  it('should ...', inject([CustomPlansService], (service: CustomPlansService) => {
    expect(service).toBeTruthy();
  }));
});
