import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit,DoCheck, OnDestroy  {

  public titlePelicula:string;
  public peliculas: any;
  public favorita?: Pelicula;
  public fecha: any;
  constructor(
    private _peliculaService:PeliculaService

  ) { 
    this.titlePelicula="Pelicula 2022"
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2022,10,21);
    

  }

  ngOnInit(): void {
    console.log(this.peliculas);

    console.log("componente lanzado");
    console.log("componente lanzado");
    console.log(this._peliculaService.holaMundo());
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

  recibirPadre(event: Pelicula){
    console.log(event);
    this.favorita = event;
    console.log(this.favorita);
  }

}
