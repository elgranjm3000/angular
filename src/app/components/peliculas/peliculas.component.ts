import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit,DoCheck, OnDestroy  {

  public titlePelicula:string;
  public peliculas: Pelicula[];
  public favorita?: Pelicula;
  constructor() { 
    this.titlePelicula="Pelicula 2022"
    this.peliculas = [
      new Pelicula("Spiderman 4",2019,"https://cdn.pixabay.com/photo/2019/02/20/10/51/spiderman-4008954__340.jpg"),
      new Pelicula("Matrix",1999,"https://cdn.pixabay.com/photo/2015/04/01/11/08/sillouette-702178__340.jpg"),
      new Pelicula("pearl harbor",2002,"https://media.istockphoto.com/id/174995890/photo/pearl-harbor-stamp.jpg?b=1&s=170667a&w=0&k=20&c=-jlMhlFAkKXWO4jmW1lbzTqqnByH036HusdfSNvGOBQ=")
      
      
    ];

  }

  ngOnInit(): void {
    console.log(this.peliculas);

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

  recibirPadre(event: Pelicula){
    console.log(event);
    this.favorita = event;
    console.log(this.favorita);
  }

}
