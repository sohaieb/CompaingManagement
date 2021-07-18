import { TestBed } from '@angular/core/testing';

import { CompaingsService } from './compaing.service';

describe('CompaingService', () => {
  let service: CompaingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompaingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
