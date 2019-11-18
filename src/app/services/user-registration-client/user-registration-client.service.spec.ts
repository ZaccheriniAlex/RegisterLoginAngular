import { TestBed } from '@angular/core/testing';

import { UserRegistrationClientService } from './user-registration-client.service';

describe('UserRegistrationClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRegistrationClientService = TestBed.get(UserRegistrationClientService);
    expect(service).toBeTruthy();
  });
});
