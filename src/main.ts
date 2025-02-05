import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { MostrarContactosComponent } from './app/mostrar-contactos/mostrar-contactos.component';
import { CrearContactoComponent } from './app/crear-contacto/crear-contacto.component';
import { EditarContactoComponent } from './app/editar-contacto/editar-contacto.component';
import { EliminarContactoComponent } from './app/eliminar-contacto/eliminar-contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule, FormsModule),
    provideRouter([
      { path: '', component: MostrarContactosComponent },
      { path: 'crear', component: CrearContactoComponent },
      { path: 'editar/:id', component: EditarContactoComponent },
      { path: 'eliminar/:id', component: EliminarContactoComponent }
    ])
  ]
});