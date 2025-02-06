import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BuscarContactosComponent } from './buscar-contactos/buscar-contactos.component';
import { CrearContactoComponent } from './crear-contacto/crear-contacto.component';
import { EditarContactoComponent } from './editar-contacto/editar-contacto.component';
import { EliminarContactoComponent } from './eliminar-contacto/eliminar-contacto.component';
import { MostrarContactosComponent } from './mostrar-contactos/mostrar-contactos.component';
import { SupabaseService } from './supabase.service';
import { ContactoService } from './contacto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
],
  providers: [SupabaseService, ContactoService],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }