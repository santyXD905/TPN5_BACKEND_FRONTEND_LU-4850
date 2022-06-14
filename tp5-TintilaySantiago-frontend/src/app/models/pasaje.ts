import { Persona } from "./persona"

export class Pasaje {
    _id!: string
    precioPasaje!: number
    categoriaPasajero!: string //categoría del pasajero puede ser: m = Menor, a = Adulto, j= Jubilado.
    fechaCompra!: string
    pasajero!: Persona

    constructor(){}
}
