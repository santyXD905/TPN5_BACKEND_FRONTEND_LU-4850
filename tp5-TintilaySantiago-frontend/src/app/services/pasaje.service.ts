import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  urlBase: string = 'http://localhost:3000/api/pasaje'

  constructor(private _http: HttpClient) { }

  public addPasaje(pasaje: Pasaje): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = JSON.stringify(pasaje)

    return this._http.post(this.urlBase, body, httpOptions)
  }

  public deletePasaje(pasaje: Pasaje): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this._http.delete(this.urlBase+"/"+pasaje._id, httpOptions)
  }


  public updatePasaje(pasaje: Pasaje): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = JSON.stringify(pasaje)

    return this._http.put(this.urlBase+"/"+pasaje._id, body, httpOptions)
  }

  public getPasajes(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this._http.get(this.urlBase, httpOptions)
  }

  public getPasajesCategoria(categoria:string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this._http.get(this.urlBase+"/"+categoria, httpOptions)
  }

  //metodo que usare para cargar una lista de personas
  public getPersonas(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this._http.get('http://localhost:3000/api/persona', httpOptions)
  }

}
