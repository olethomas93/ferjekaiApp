import { TestBed } from '@angular/core/testing';

import { Ssev2Service } from './ssev2.service';

describe('Ssev2Service', () => {
  let service: Ssev2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ssev2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
