import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarChamadaComponent } from './listar-chamada.component';

describe('ListarChamadaComponent', () => {
  let component: ListarChamadaComponent;
  let fixture: ComponentFixture<ListarChamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarChamadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarChamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
