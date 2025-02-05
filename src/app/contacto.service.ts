import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiUrl = 'https://github.com/NoSoyDonete/Agenda-back';

  constructor(private http: HttpClient) {}

  getContactos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  crearContacto(contacto: any): Observable<any> {
    return this.http.post(this.apiUrl, contacto);
  }

  editarContacto(id: number, contacto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, contacto);
  }

  eliminarContacto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  buscarContactos(termino: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((contactos: any[]) => 
        contactos.filter(contacto => 
          contacto.nombre.toLowerCase().includes(termino.toLowerCase()) ||
          contacto.telefono.includes(termino) ||
          (contacto.email && contacto.email.toLowerCase().includes(termino.toLowerCase()))
        )
      )
    );
  }
}
