import { TestBed, inject } from '@angular/core/testing';

import { TesterServiceService } from './tester-service.service';

describe('TesterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TesterServiceService]
    });
  });

  it('should be created', inject([TesterServiceService], (service: TesterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
