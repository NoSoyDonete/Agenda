import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarContactosComponent } from './mostrar-contactos/mostrar-contactos.component';
import { CrearContactoComponent } from './crear-contacto/crear-contacto.component';
import { EditarContactoComponent } from './editar-contacto/editar-contacto.component';
import { EliminarContactoComponent } from './eliminar-contacto/eliminar-contacto.component';
import { BuscarContactosComponent } from './buscar-contactos/buscar-contactos.component';

export const routes: Routes = [
  { path: '', component: MostrarContactosComponent },
  { path: 'crear', component: CrearContactoComponent },
  { path: 'editar/:id', component: EditarContactoComponent },
  { path: 'eliminar/:id', component: EliminarContactoComponent },
  { path: 'buscar', component: BuscarContactosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }