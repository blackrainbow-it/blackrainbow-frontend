import { TestBed } from '@angular/core/testing';

import { CloudVisionServiceService } from './cloud-vision-service.service';

describe('CloudVisionServiceService', () => {
  let service: CloudVisionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudVisionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
