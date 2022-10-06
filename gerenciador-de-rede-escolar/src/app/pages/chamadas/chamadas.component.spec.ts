import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadasComponent } from './chamadas.component';

describe('ChamadasComponent', () => {
  let component: ChamadasComponent;
  let fixture: ComponentFixture<ChamadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
