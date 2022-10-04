import { TestBed } from '@angular/core/testing';

import { VisualizarMatriculaService } from './visualizar-matricula.service';

describe('VisualizarMatriculaService', () => {
  let service: VisualizarMatriculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualizarMatriculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
