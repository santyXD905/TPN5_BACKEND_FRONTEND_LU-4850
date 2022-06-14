import { Component, OnInit } from '@angular/core';
import { Moneda } from 'src/app/models/moneda';
import { ConvertirMonedaService } from 'src/app/services/convertir-moneda.service';

@Component({
  selector: 'app-punto2-listas',
  templateUrl: './punto2-listas.component.html',
  styleUrls: ['./punto2-listas.component.css']
})
export class Punto2ListasComponent implements OnInit {

  transacciones: Array<Moneda> = [];
  transaccionesFiltradas: Array<Moneda> = [];
  transaccion!: Moneda ;
  origen!: string;
  destino!: string;

  constructor(private convertirMonedaService: ConvertirMonedaService) { }

  obtenerTransacciones(){
    this.transacciones = new Array<Moneda>()
    this.convertirMonedaService.getTransacciones().subscribe( res => {
      res.forEach( (element: any) => {
        this.transaccion = new Moneda()
        Object.assign(this.transaccion,element)
        this.transacciones.push(this.transaccion)
      })
    })
  }

  obtenerTransaccionesOrigenDestino(){
    this.transaccionesFiltradas = new Array<Moneda>()
    this.convertirMonedaService.getTransaccionesOrigenDestino(this.origen,this.destino).subscribe( res => {
      res.forEach( (element: any) => {
        this.transaccion = new Moneda()
        Object.assign(this.transaccion,element)
        this.transaccionesFiltradas.push(this.transaccion)
      })
    })
  }

  ngOnInit(): void {
  }

}
