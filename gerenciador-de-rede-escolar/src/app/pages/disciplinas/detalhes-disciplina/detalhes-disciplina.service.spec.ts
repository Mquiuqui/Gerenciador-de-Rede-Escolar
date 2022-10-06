import { TestBed } from '@angular/core/testing';

import { DetalhesDisciplinaService } from './detalhes-disciplina.service';

describe('DetalhesDisciplinaService', () => {
  let service: DetalhesDisciplinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalhesDisciplinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
