import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../contacto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './eliminar-contacto.component.html',
  styleUrls: ['./eliminar-contacto.component.css']
})
export class EliminarContactoComponent implements OnInit {
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

  onDelete(): void {
    this.contactoService.eliminarContacto(this.contacto.id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
  onCancel(): void {
    // Redirige a la página principal
    this.router.navigate(['/']);
  }
}