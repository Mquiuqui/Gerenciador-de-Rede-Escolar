import { TestBed } from '@angular/core/testing';

import { CadastroDisciplinasService } from './cadastro-disciplinas.service';

describe('CadastroDisciplinasService', () => {
  let service: CadastroDisciplinasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroDisciplinasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
