import { Component, OnInit } from '@angular/core';
import { Moneda } from 'src/app/models/moneda';
import { ConvertirMonedaService } from 'src/app/services/convertir-moneda.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  moneda: Moneda = new Moneda();

  //variables para la tabla
  arregloTipos: Array<string> = [ 
    "USD",
    "EUR",
    "GBP",
    "JPY"
  ]

  tablaMonedasUSD:Array<any> = [ 0,1,2,3]
  tablaMonedasEUR:Array<any> = [ 0,1,2,3]
  tablaMonedasGBP:Array<any> = [ 0,1,2,3]
  tablaMonedasJPY:Array<any> = [ 0,1,2,3]

  constructor(private convertirMonedaService: ConvertirMonedaService) { }

  ngOnInit(): void {
     //cargo las tablas de monedas
     //disculpe que no haya encontrado una API que muestre mas decimales y a su vez provea muchas consultas gratis
     /*
     for(let i = 0; i < 4; i++){
      this.convertirMonedaService.convertMoney("USD",this.arregloTipos[i],1).subscribe(data => {
      this.tablaMonedasUSD[i] = data.new_amount
      })
      this.convertirMonedaService.convertMoney("EUR",this.arregloTipos[i],1).subscribe(data => {
      this.tablaMonedasEUR[i] = data.new_amount
      })
      this.convertirMonedaService.convertMoney("GBP",this.arregloTipos[i],1).subscribe(data => {
      this.tablaMonedasGBP[i] = data.new_amount
      })
      this.convertirMonedaService.convertMoney("JPY",this.arregloTipos[i],1).subscribe(data => {
      this.tablaMonedasJPY[i] = data.new_amount
      })
    } */
  }

  convertirMoneda(){
    this.convertirMonedaService.convertMoney(this.moneda.monedaOrigen,
      this.moneda.monedaDestino, this.moneda.cantidadOrigen).subscribe(res => {
        this.moneda.cantidadDestino = res.new_amount
        //guardo la transaccion
        this.convertirMonedaService.setTransaccion(this.moneda).subscribe()
      }  
    ) 
  }
}
