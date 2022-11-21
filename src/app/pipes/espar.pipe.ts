import { Pipe,PipeTransform } from '@angular/core';

@Pipe({name: 'esPar'})


export class EsParPipe implements PipeTransform{

    transform(value: any){
        var text = " no es numero par "
        if(value%2 == 0){
            text = "Es numero par"
        }
        return " el numero es "+value + " y "+text;
    }

    
}