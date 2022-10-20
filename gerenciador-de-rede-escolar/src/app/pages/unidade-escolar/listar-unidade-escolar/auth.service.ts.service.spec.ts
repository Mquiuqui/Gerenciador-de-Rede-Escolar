import { TestBed } from '@angular/core/testing';

import { Auth.Service.TsService } from './auth.service.ts.service';

describe('Auth.Service.TsService', () => {
  let service: Auth.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
