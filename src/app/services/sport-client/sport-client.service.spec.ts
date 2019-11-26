import { TestBed } from '@angular/core/testing';

import { SportClientService } from './sport-client.service';

describe('SportClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportClientService = TestBed.get(SportClientService);
    expect(service).toBeTruthy();
  });
});
