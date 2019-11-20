import { TestBed } from '@angular/core/testing';

import { UserLoginClientService } from './user-client.service';

describe('UserLoginClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserLoginClientService = TestBed.get(UserLoginClientService);
    expect(service).toBeTruthy();
  });
});
