import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moneda } from '../models/moneda';

@Injectable({
  providedIn: 'root'
})
export class ConvertirMonedaService{

  urlBase: string = 'http://localhost:3000/api/transaccion'

  constructor(private _http: HttpClient) { }

  public convertMoney(have: string, want: string, amount: number): Observable<any>{
    const httpOptions = {
      params: {
        "have": have,
        "want": want,
        "amount": amount
      },
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
        'X-RapidAPI-Key': '5b66b40ef6msh8300b9566abae1cp1749a4jsn2860c882382d',
      }),
    };
    return this._http.get('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',httpOptions)
  }

  public getTransacciones(): Observable<any> {
    const httpOptions = {
      params:{},
      headers: new HttpHeaders({})
    }  
    return this._http.get(this.urlBase, httpOptions) 
  }

  public getTransaccionesOrigenDestino(origen: string,destino: string): Observable<any> {
    const httpOptions = {
      params:{},
      headers: new HttpHeaders({})
    }  
    return this._http.get(this.urlBase+"/"+origen+"/"+destino, httpOptions) 
  }

  public setTransaccion(moneda: Moneda): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }  
   let body = JSON.stringify(moneda)
   console.log(JSON.stringify(moneda))
  
    return this._http.post(this.urlBase,body, httpOptions)
  }

}
