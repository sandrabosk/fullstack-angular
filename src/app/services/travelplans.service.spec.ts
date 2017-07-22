import { TestBed, inject } from '@angular/core/testing';

import { TravelplansService } from './travelplans.service';

describe('TravelplansService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelplansService]
    });
  });

  it('should ...', inject([TravelplansService], (service: TravelplansService) => {
    expect(service).toBeTruthy();
  }));
});
