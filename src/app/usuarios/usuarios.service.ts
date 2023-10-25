import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

export interface usuario {
  id: number;
  nombre:string;
}


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  getContador(): Observable<number> {
    return interval(1000)
  }

  getUsuarios(): Observable<usuario[]> {
    return new Observable((Subscriber) => {
      Subscriber.next([
        {
          id: 1,
          nombre: 'Hugo'
        },
        {
          id: 2,
          nombre: 'Sofia'
        },
      ])
    });
  } 
}
