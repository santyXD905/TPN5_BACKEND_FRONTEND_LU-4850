import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-punto1-form',
  templateUrl: './punto1-form.component.html',
  styleUrls: ['./punto1-form.component.css']
})
export class Punto1FormComponent implements OnInit {

  libro: Libro = new Libro();
  

  constructor(private libroService: LibroService) { }

  guardarLibro(libro: Libro): void {
    this.libroService.setLibro(libro).subscribe();
    this.libro = new Libro();
  }

  ngOnInit(): void {
  }

}
