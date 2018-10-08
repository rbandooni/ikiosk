import { TestBed, inject } from '@angular/core/testing';

import { LabStatsService } from './lab-stats.service';

describe('LabStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabStatsService]
    });
  });

  it('should be created', inject([LabStatsService], (service: LabStatsService) => {
    expect(service).toBeTruthy();
  }));
});
