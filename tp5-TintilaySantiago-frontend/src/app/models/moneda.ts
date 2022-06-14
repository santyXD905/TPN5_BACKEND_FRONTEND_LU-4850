export class Moneda {
    monedaOrigen!: string
    cantidadOrigen!: number
    monedaDestino!: string
    cantidadDestino!: number
    emailCliente!: string
    tasaConversion!: number // Dato que ingresa el cliente, y seha utilizado para calcular cantidadDestino.

    constructor(){}
}
