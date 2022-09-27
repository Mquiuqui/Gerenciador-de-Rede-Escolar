import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresAlunosComponent } from './melhores-alunos.component';

describe('MelhoresAlunosComponent', () => {
  let component: MelhoresAlunosComponent;
  let fixture: ComponentFixture<MelhoresAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelhoresAlunosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelhoresAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
