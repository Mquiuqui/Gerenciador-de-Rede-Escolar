import { TestBed } from '@angular/core/testing';

import { CadastroUeService } from './cadastro-ue.service';

describe('CadastroUeService', () => {
  let service: CadastroUeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroUeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
