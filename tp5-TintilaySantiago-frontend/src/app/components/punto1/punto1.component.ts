import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  
  libros: Array<Libro> = [];
  libro!: Libro;
  indice: number = 0;

  constructor(private libroService: LibroService) { }

  anterior(){
    this.indice--
    if(this.indice < 0) {
      //creo un bucle 
      this.indice = this.libros.length - 1
    }
    this.libro = this.libros[this.indice]
    console.log(this.indice)
  }

  siguiente(){
    this.indice++
    if(this.indice == this.libros.length){
      //creo un bucle
      this.indice = 0
    }
    this.libro = this.libros[this.indice]
    console.log(this.indice)
  }

  ngOnInit(): void {
    this.libroService.getLibrosDestacados().subscribe( res => {
      res.forEach( (element: any) => {
        this.libro = new Libro()
        Object.assign(this.libro,element)
        this.libros.push(this.libro)
      })
    })
  }

}
