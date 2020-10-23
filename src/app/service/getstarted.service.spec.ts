import { TestBed } from '@angular/core/testing';

import { GetstartedService } from './getstarted.service';

describe('GetstartedService', () => {
  let service: GetstartedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetstartedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
