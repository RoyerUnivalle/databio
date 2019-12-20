import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganismService {

  constructor(
    public http: HttpClient
  ) { }


  cargarRegistros(desde: number = 0) {
    let url = URL_SERVICIOS + '/organism?desde=' + desde;

    return this.http.get(url);
  }


  obtenerRegistro(id: string) {
    let url = URL_SERVICIOS + '/organism/' + id;

    return this.http.get(url).pipe(
      map((resp: any) => resp.organisms)
    );
  }

}