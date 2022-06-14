export class Libro {
    //variables de la clase
    titulo!: string
    descripcion!: string
    imagen!: string //url de una imagen el la web para mostrar
    stock!: number
    destacado!: boolean // solo algunos libros son destacados

    //consructor de la clase
    constructor() {
        this.destacado = false
    }
}
