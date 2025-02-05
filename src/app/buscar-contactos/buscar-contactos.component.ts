import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactoService } from '../contacto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-buscar-contactos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './buscar-contactos.component.html',
  styleUrls: ['./buscar-contactos.component.css']
})
export class BuscarContactosComponent implements OnInit, OnDestroy {
  contactos: any[] = [];
  terminoBusqueda: string = '';
  private busquedaSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private contactoService: ContactoService) {}

  ngOnInit() {
    this.busquedaSubject.pipe(
      takeUntil(this.destroy$),
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(termino => {
      if (termino) {
        this.buscarContactos(termino);
      } else {
        this.contactos = [];
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onBuscar(event: any): void {
    this.busquedaSubject.next(event.target.value);
  }

  private buscarContactos(termino: string): void {
    this.contactoService.buscarContactos(termino)
      .subscribe(resultados => {
        this.contactos = resultados;
      });
  }
}