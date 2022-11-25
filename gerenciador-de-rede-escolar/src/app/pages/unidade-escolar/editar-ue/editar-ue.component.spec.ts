import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUeComponent } from './editar-ue.component';

describe('EditarUeComponent', () => {
  let component: EditarUeComponent;
  let fixture: ComponentFixture<EditarUeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarUeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarUeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
