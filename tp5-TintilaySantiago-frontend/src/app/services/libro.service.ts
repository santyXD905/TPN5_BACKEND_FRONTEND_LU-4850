import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  urlBase: string = 'http://localhost:3000/api/libro'

  constructor(private _http: HttpClient) {}

  public getLibrosDestacados(): Observable<any> {
    const httpOptions = {
      params:{},
      headers: new HttpHeaders({})
    }  
    return this._http.get(this.urlBase+"/destacados", httpOptions) 
  }

  public setLibro(libro: Libro): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }  
   let body = JSON.stringify(libro)
   console.log(JSON.stringify(libro))
  
    return this._http.post(this.urlBase,body, httpOptions)
  }
}
