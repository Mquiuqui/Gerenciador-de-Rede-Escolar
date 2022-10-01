import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUeComponent } from './cadastro-ue.component';

describe('CadastroUeComponent', () => {
  let component: CadastroUeComponent;
  let fixture: ComponentFixture<CadastroUeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroUeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroUeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
