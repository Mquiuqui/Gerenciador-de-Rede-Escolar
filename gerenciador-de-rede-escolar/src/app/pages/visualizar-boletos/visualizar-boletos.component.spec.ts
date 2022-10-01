import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarBoletosComponent } from './visualizar-boletos.component';

describe('VisualizarBoletosComponent', () => {
  let component: VisualizarBoletosComponent;
  let fixture: ComponentFixture<VisualizarBoletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarBoletosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
