import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2ListasComponent } from './punto2-listas.component';

describe('Punto2ListasComponent', () => {
  let component: Punto2ListasComponent;
  let fixture: ComponentFixture<Punto2ListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto2ListasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto2ListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
