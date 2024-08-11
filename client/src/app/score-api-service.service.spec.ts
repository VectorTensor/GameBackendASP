import { TestBed } from '@angular/core/testing';

import { ScoreApiServiceService } from './score-api-service.service';

describe('ScoreApiServiceService', () => {
  let service: ScoreApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
