import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUnidadeEscolarComponent } from './listar-unidade-escolar.component';

describe('ListarUnidadeEscolarComponent', () => {
  let component: ListarUnidadeEscolarComponent;
  let fixture: ComponentFixture<ListarUnidadeEscolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarUnidadeEscolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarUnidadeEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
