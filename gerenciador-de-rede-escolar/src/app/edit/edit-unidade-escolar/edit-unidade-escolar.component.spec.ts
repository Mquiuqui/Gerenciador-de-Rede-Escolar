import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnidadeEscolarComponent } from './edit-unidade-escolar.component';

describe('EditUnidadeEscolarComponent', () => {
  let component: EditUnidadeEscolarComponent;
  let fixture: ComponentFixture<EditUnidadeEscolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUnidadeEscolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUnidadeEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
