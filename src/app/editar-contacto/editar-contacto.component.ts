import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../contacto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-contacto.component.html',
  styleUrls: ['./editar-contacto.component.css']
})
export class EditarContactoComponent implements OnInit {
  contacto = { id: 0, nombre: '', telefono: '', email: '' };

  constructor(
    private contactoService: ContactoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.contactoService.getContactos().subscribe((data: any) => {
      this.contacto = data.find((c: any) => c.id == id);
    });
  }

  onSubmit(): void {
    // Verificar que nombre y teléfono no estén vacíos
    if (this.contacto.nombre.trim() && this.contacto.telefono.trim()) {
      this.contactoService.editarContacto(this.contacto.id, this.contacto).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}