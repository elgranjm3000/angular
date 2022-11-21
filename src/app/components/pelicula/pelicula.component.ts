import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input()pelicula?:Pelicula
  @Output() MarcarAPadre = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
   
  }

  marcarFavorito(event: Event,pelicula?:Pelicula) {
    console.log(pelicula);
    this.MarcarAPadre.emit(pelicula);
  }

}
