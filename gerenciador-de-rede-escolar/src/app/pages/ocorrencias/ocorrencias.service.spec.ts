import { TestBed } from '@angular/core/testing';

import { OcorrenciasService } from './ocorrencias.service';

describe('OcorrenciasService', () => {
  let service: OcorrenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcorrenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
