import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable  } from 'rxjs';

@Injectable()
export class ArticleService {
    constructor(
        private _http: HttpClient
    ) {
        
    }

    pruebas(){
        return "soy el servicio del articulo";
    }
}