import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.componet.html'
})
export class MiComponente {

    public titulo:string;
    public comentario:string;
    public year:number;
    public ocultar:boolean;
    constructor() { 
        this.ocultar = true;
        this.titulo = "esto es un titulo";
        this.comentario = "probando angular";
        this.year= 2022;
        console.log("componente ok");
    }

    ocultarComponente(){
        this.ocultar =false;
    }


}
