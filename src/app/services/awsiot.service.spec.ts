import { TestBed } from '@angular/core/testing';

import { AwsiotService } from './awsiot.service';

describe('AwsiotService', () => {
  let service: AwsiotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsiotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
