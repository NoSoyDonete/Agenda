import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarContactosComponent } from './mostrar-contactos.component';

describe('MostrarContactosComponent', () => {
  let component: MostrarContactosComponent;
  let fixture: ComponentFixture<MostrarContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarContactosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
