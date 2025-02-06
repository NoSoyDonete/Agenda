import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
<<<<<<< HEAD
  private supabase: SupabaseClient;
=======
  private apiUrl = 'https://github.com/NoSoyDonete/Agenda-back';
>>>>>>> e44303bf728146a719d4e357e0ea9d48eb16493b

  constructor() {
    this.supabase = createClient(
      process.env['NEXT_PUBLIC_SUPABASE_URL'] || '',
      process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] || ''
    );
  }

  getContactos(): Observable<any> {
    return from(
      this.supabase
        .from('contactos')
        .select('*')
    ).pipe(
      map(response => response.data)
    );
  }

  crearContacto(contacto: any): Observable<any> {
    return from(
      this.supabase
        .from('contactos')
        .insert([contacto])
    ).pipe(
      map(response => response.data)
    );
  }

  editarContacto(id: number, contacto: any): Observable<any> {
    return from(
      this.supabase
        .from('contactos')
        .update(contacto)
        .eq('id', id)
    ).pipe(
      map(response => response.data)
    );
  }

  eliminarContacto(id: number): Observable<any> {
    return from(
      this.supabase
        .from('contactos')
        .delete()
        .eq('id', id)
    );
  }

  buscarContactos(termino: string): Observable<any[]> {
    return from(
      this.supabase
        .from('contactos')
        .select('*')
    ).pipe(
      map(response => {
        const contactos = response.data || [];
        return contactos.filter(contacto => 
          contacto.nombre.toLowerCase().includes(termino.toLowerCase()) ||
          contacto.telefono.includes(termino) ||
          (contacto.email && contacto.email.toLowerCase().includes(termino.toLowerCase()))
        );
      })
    );
  }
}
