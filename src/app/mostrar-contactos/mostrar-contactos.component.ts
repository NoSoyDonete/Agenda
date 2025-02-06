import { Component, type OnInit } from "@angular/core";
import { ContactoService } from "../contacto.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-mostrar-contactos",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: "./mostrar-contactos.component.html",
  styleUrls: ["./mostrar-contactos.component.css"],
})
export class MostrarContactosComponent implements OnInit {
  contactos: any[] = [];
  contactosFiltrados: any[] = [];
  terminoBusqueda = "";
  expandedId: number | null = null;
  error: string | null = null;

  constructor(private contactoService: ContactoService) {}

  ngOnInit(): void {
    this.cargarContactos();
  }

  cargarContactos(): void {
    this.contactoService.getContactos().subscribe({
      next: (data: any) => {
        this.contactos = data.sort((a: any, b: any) => 
          a.nombre.localeCompare(b.nombre)
        );
        this.contactosFiltrados = this.contactos;
        this.error = null;
      },
      error: (error) => {
        console.error('Error al cargar contactos:', error);
        this.error = 'Error al cargar los contactos. Por favor, intenta de nuevo.';
      }
    });
  }

  toggleContacto(id: number): void {
    this.expandedId = this.expandedId === id ? null : id;
  }

  buscarContactos(): void {
    if (this.terminoBusqueda.trim() === "") {
      this.contactosFiltrados = this.contactos;
    } else {
      this.contactosFiltrados = this.contactos.filter(
        (contacto) =>
          contacto.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
          contacto.telefono.includes(this.terminoBusqueda) ||
          (contacto.email && contacto.email.toLowerCase().includes(this.terminoBusqueda.toLowerCase())),
      );
    }
    this.contactosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }
}