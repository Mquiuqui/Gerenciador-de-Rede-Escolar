import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarMatriculaComponent } from './visualizar-matricula.component';

describe('VisualizarMatriculaComponent', () => {
  let component: VisualizarMatriculaComponent;
  let fixture: ComponentFixture<VisualizarMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarMatriculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
