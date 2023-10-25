import { Component } from '@angular/core';
import { usuario, UsuariosService } from './usuarios.service';
import { Observable, filter, map, take } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {

  usuarios$: Observable<usuario[]>;
  contador = 0;
  
 constructor(private UsuariosService: UsuariosService) {
  this.usuarios$ = this.UsuariosService.getUsuarios();
  this.UsuariosService.getContador().pipe(
    take(20),
    map((v) => v * 3),
    filter((v) => v > 2)
  ).subscribe({
    next: (v) => {
      this.contador = v;
    }
  })

}
}
