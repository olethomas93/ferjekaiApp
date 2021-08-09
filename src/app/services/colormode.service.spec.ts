import { TestBed } from '@angular/core/testing';

import { ColormodeService } from './colormode.service';

describe('ColormodeService', () => {
  let service: ColormodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColormodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
