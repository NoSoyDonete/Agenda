import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseAnonKey
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