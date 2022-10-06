import { TestBed } from '@angular/core/testing';

import { AtividadesService } from './atividades.service';

describe('AtividadesService', () => {
  let service: AtividadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtividadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
