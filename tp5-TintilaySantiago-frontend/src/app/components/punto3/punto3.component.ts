import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
 
  pasajes: Array<Pasaje> = [];
  pasaje: Pasaje = new Pasaje()
  pasajeros:Array<Persona> = []
  pasajero: Persona = new Persona()
  modoEdicion: boolean = false

  constructor(private pasajeService: PasajeService, private router: Router, private activatedRoute: ActivatedRoute) { 
  }
  

  agregarPasaje(){
    this.pasajeService.addPasaje(this.pasaje).subscribe()
    this.pasaje = new Pasaje()
  }

  actualizarPasaje(){
    this.modoEdicion = false
    this.pasajeService.updatePasaje(this.pasaje).subscribe()
    this.pasaje = new Pasaje()
  }

  editarPasaje(){
    this.agregarPasajes()
    this.modoEdicion = true
  }


  agregarPasajeros(){
    this.pasajeService.getPersonas().subscribe( res => {
      res.forEach( (element: any) => {
        this.pasajero = new Persona()
        Object.assign(this.pasajero,element)
        this.pasajeros.push(this.pasajero)
      })
    })
  }

  agregarPasajes(){
    this.pasajeService.getPasajes().subscribe( res => {
      res.forEach( (element: any) => {
        this.pasaje = new Pasaje()
        Object.assign(this.pasaje,element)
        this.pasajes.push(this.pasaje)
      })
    })
  }

  calcularTotal(){
    let descuento = 0
    if(this.pasaje.categoriaPasajero == "Menor") descuento = 0.25
    else if(this.pasaje.categoriaPasajero == "Jubilado") descuento = 0.50

    return this.pasaje.precioPasaje - (this.pasaje.precioPasaje * descuento)
  }

  ngOnInit(): void {
    this.agregarPasajeros()
    this.activatedRoute.params.subscribe(params => {
      Object.assign(params,this.pasaje)
      console.log(params)
      if (JSON.stringify(params) != "{}") {
        this.modoEdicion = true
        Object.assign(this.pasaje,params)
      }
      else{
        this.modoEdicion = false
      }
      })
  }

}
