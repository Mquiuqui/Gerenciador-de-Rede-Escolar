import { TestBed } from '@angular/core/testing';

import { ListarUnidadesServiceService } from './listar-unidades-service.service';

describe('ListarUnidadesServiceService', () => {
  let service: ListarUnidadesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarUnidadesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
