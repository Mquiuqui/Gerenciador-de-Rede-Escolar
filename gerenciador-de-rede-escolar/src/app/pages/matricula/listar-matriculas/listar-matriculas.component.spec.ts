import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMatriculasComponent } from './listar-matriculas.component';

describe('ListarMatriculasComponent', () => {
  let component: ListarMatriculasComponent;
  let fixture: ComponentFixture<ListarMatriculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMatriculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
