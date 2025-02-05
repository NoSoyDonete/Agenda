import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarContactosComponent } from './buscar-contactos.component';

describe('BuscarContactosComponent', () => {
  let component: BuscarContactosComponent;
  let fixture: ComponentFixture<BuscarContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarContactosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
