import { Endereco } from "../endereco"
import { Hospital } from "../hospital"

export class ProfissionalDTO {
    public id: number
    public nome: string
    public telefone: string
    public cargo: string
    public rua: string
    public numero: string
    public bairro: string
    public cidade: string
    public estado: string

    public hospitais: Hospital[]
}