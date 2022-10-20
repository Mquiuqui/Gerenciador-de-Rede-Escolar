import { TestBed } from '@angular/core/testing';

import { ListarUnidadesService } from './listar-unidades.service';

describe('ListarUnidadesService', () => {
  let service: ListarUnidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarUnidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
