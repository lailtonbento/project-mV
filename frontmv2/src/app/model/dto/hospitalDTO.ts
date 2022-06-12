import { Endereco } from "../endereco"
import { Profissional } from "../profissional"

export class HospitalDTO {
    public id: number
    public nome: string
    public telefone: string
    public endereco: Endereco
    public profissionais: Profissional[]

    
}