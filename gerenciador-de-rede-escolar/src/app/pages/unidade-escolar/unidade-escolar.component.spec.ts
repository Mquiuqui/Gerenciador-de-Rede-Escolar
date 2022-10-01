import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeEscolarComponent } from './unidade-escolar.component';

describe('UnidadeEscolarComponent', () => {
  let component: UnidadeEscolarComponent;
  let fixture: ComponentFixture<UnidadeEscolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadeEscolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadeEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
