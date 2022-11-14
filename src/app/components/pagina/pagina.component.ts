import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre:string;
  public apellidos:string;

  constructor(
    private _router : Router,
    private _route: ActivatedRoute
  ) {
    this.nombre = this._route.snapshot.params['nombre'];
    this.apellidos = this._route.snapshot.params['apellido'];

   }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {

    })
  }

  redireccion(){
    this._router.navigate(['/pagina-de-prueba','Joseph','Muentes']);
  }

}
