import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { MostrarContactosComponent } from './app/mostrar-contactos/mostrar-contactos.component';
import { CrearContactoComponent } from './app/crear-contacto/crear-contacto.component';
import { EditarContactoComponent } from './app/editar-contacto/editar-contacto.component';
import { EliminarContactoComponent } from './app/eliminar-contacto/eliminar-contacto.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BuscarContactosComponent } from './app/buscar-contactos/buscar-contactos.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(FormsModule),
    provideRouter([
      { path: '', redirectTo: '/mostrar', pathMatch: 'full' },
      { path: 'mostrar', component: MostrarContactosComponent },
      { path: 'crear', component: CrearContactoComponent },
      { path: 'editar/:id', component: EditarContactoComponent },
      { path: 'eliminar/:id', component: EliminarContactoComponent },
      { path: 'buscar', component: BuscarContactosComponent },
      { path: '**', redirectTo: '/mostrar' }
    ])
  ]
}).catch(err => console.error('Error al iniciar la aplicación:', err));