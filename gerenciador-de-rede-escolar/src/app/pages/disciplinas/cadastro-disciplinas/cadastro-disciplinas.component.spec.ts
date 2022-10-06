import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDisciplinasComponent } from './cadastro-disciplinas.component';

describe('CadastroDisciplinasComponent', () => {
  let component: CadastroDisciplinasComponent;
  let fixture: ComponentFixture<CadastroDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDisciplinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
