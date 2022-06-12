import { Endereco } from "../endereco"
import { Hospital } from "../hospital"

export class ProfissionalDTO {
    public id: number
    public nome: string
    public telefone: string
    public cargo: string
    public endereco: Endereco

    public hospitais: Hospital[]
}