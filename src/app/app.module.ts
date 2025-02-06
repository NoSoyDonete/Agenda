import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BuscarContactosComponent } from './buscar-contactos/buscar-contactos.component';
import { CrearContactoComponent } from './crear-contacto/crear-contacto.component';
import { EditarContactoComponent } from './editar-contacto/editar-contacto.component';
import { EliminarContactoComponent } from './eliminar-contacto/eliminar-contacto.component';
import { MostrarContactosComponent } from './mostrar-contactos/mostrar-contactos.component';

import { ContactoService } from './contacto.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppComponent,
    BuscarContactosComponent,
    CrearContactoComponent,
    EditarContactoComponent,
    EliminarContactoComponent,
    MostrarContactosComponent
  ],
  providers: [
    ContactoService
  ],
  bootstrap: []
})
export class AppModule { }