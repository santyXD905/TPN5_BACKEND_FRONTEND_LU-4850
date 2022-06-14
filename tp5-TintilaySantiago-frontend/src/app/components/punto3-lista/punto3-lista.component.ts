import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-punto3-lista',
  templateUrl: './punto3-lista.component.html',
  styleUrls: ['./punto3-lista.component.css']
})
export class Punto3ListaComponent implements OnInit {

  pasajes:Array<Pasaje> = []
  pasaje: Pasaje = new Pasaje()
  categoriaFiltro: string = ""
  
  constructor(private pasajeService:PasajeService,private router: Router, private activatedRoute: ActivatedRoute) { }

  eliminarPasaje(pasajeBorrar: Pasaje){
    this.pasajeService.deletePasaje(pasajeBorrar).subscribe()
    this.recargarTabla()
  }
  editarPasaje(pasaje: Pasaje){
    this.router.navigate(['/punto3/', pasaje])
  }

  recargarTabla(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url])
  }

  filtrar(){
    this.pasajes = []
    this.pasajeService.getPasajesCategoria(this.categoriaFiltro).subscribe(res => {
      res.forEach( (element: any) => {
        this.pasaje = new Pasaje()
        Object.assign(this.pasaje,element)
        this.pasajes.push(this.pasaje)
      })
    })
  }

  ngOnInit(): void {
    this.pasajeService.getPasajes().subscribe( res => {
      res.forEach( (element: any) => {
        this.pasaje = new Pasaje()
        Object.assign(this.pasaje,element)
        this.pasajes.push(this.pasaje)
      })
    })
  }

}
