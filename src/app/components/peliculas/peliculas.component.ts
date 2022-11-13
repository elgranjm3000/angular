import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit,DoCheck, OnDestroy  {

  public titlePelicula:string;
  constructor() { 
    this.titlePelicula="Pelicula 2022"
    console.log("1 constructor");
  }

  ngOnInit(): void {
    console.log("componente lanzado");
    console.log("componente lanzado");
  }

  ngDoCheck(): void {
    console.log("docher iniciado")
  }

  cambiarTitulo(){
    this.titlePelicula="Pelculas 2023"
  }

  ngOnDestroy (): void {
    console.log("el componente se va eliminar");
  }

}
