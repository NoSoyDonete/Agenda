import { Routes } from '@angular/router';
import { MostrarContactosComponent } from './mostrar-contactos/mostrar-contactos.component';
import { CrearContactoComponent } from './crear-contacto/crear-contacto.component';
import { EditarContactoComponent } from './editar-contacto/editar-contacto.component';
import { EliminarContactoComponent } from './eliminar-contacto/eliminar-contacto.component';
import { BuscarContactosComponent } from './buscar-contactos/buscar-contactos.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'mostrar', 
    pathMatch: 'full' 
  },
  { 
    path: 'mostrar', 
    component: MostrarContactosComponent 
  },
  { 
    path: 'crear', 
    component: CrearContactoComponent 
  },
  { 
    path: 'editar/:id', 
    component: EditarContactoComponent 
  },
  { 
    path: 'eliminar/:id', 
    component: EliminarContactoComponent 
  },
  { 
    path: 'buscar', 
    component: BuscarContactosComponent 
  },
  { 
    path: '**', 
    redirectTo: 'mostrar' 
  }
];