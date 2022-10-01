import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAnoLetivoComponent } from './cadastro-ano-letivo.component';

describe('CadastroAnoLetivoComponent', () => {
  let component: CadastroAnoLetivoComponent;
  let fixture: ComponentFixture<CadastroAnoLetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAnoLetivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAnoLetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
