import { Component } from '@angular/core';
import { ContactoService } from '../contacto.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-contacto.component.html',
  styleUrls: ['./crear-contacto.component.css']
})
export class CrearContactoComponent {
  contacto = { nombre: '', telefono: '', email: '' };

  constructor(private contactoService: ContactoService, private router: Router) {}

  onSubmit(): void {
    // Verificar que nombre y teléfono no estén vacíos
    if (this.contacto.nombre.trim() && this.contacto.telefono.trim()) {
      this.contactoService.crearContacto(this.contacto).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

    onCancel(): void {
      // Restablece el formulario
      this.contacto = { nombre: '', telefono: '', email: '' };
      // Redirige a la página principal
      this.router.navigate(['/']);
    }
}