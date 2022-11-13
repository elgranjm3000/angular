import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.componet.html'
})
export class MiComponente {

    public titulo:string;
    public comentario:string;
    public year:number;
    constructor() { 
        this.titulo = "esto es un titulo";
        this.comentario = "probando angular";
        this.year= 2022;
        console.log("componente ok");
    }
}
