import { Injectable } from '@angular/core';
import { Pelicula  } from '../models/pelicula';

@Injectable()

export class PeliculaService {

    public peliculas?: Pelicula[];

    constructor() {
        this.peliculas = [
            new Pelicula("Spiderman 4",2020,"https://cdn.pixabay.com/photo/2019/02/20/10/51/spiderman-4008954__340.jpg"),
            new Pelicula("Matrix",1999,"https://cdn.pixabay.com/photo/2015/04/01/11/08/sillouette-702178__340.jpg"),
            new Pelicula("pearl harbor",2002,"https://media.istockphoto.com/id/174995890/photo/pearl-harbor-stamp.jpg?b=1&s=170667a&w=0&k=20&c=-jlMhlFAkKXWO4jmW1lbzTqqnByH036HusdfSNvGOBQ=")            
            
          ]
    }

    holaMundo(){
        return "Hola mundo es un servicio angular";
    }

    getPeliculas(){
        return this.peliculas;
    }
}