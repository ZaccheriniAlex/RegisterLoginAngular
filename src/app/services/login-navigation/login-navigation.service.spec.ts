import { TestBed } from '@angular/core/testing';

import { LoginNavigationService } from './login-navigation.service';

describe('LoginNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginNavigationService = TestBed.get(LoginNavigationService);
    expect(service).toBeTruthy();
  });
});
