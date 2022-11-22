import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { Global } from './global';

@Injectable()
export class ArticleService {
    public url:string;
    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    pruebas(){
        return "soy el servicio del articulo";
    }

    getArticles():Observable<any>{
            return this._http.get(this.url+'listarticles');
    }
}