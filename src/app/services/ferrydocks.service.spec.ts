import { TestBed } from '@angular/core/testing';

import { FerrydocksService } from './ferrydocks.service';

describe('FerrydocksService', () => {
  let service: FerrydocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FerrydocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
