import { TestBed } from '@angular/core/testing';

import { CadastroClasseService } from './cadastro-classe.service';

describe('CadastroClasseService', () => {
  let service: CadastroClasseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroClasseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
