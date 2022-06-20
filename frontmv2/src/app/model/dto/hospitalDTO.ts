import { Endereco } from "../endereco"
import { Profissional } from "../profissional"

export class HospitalDTO {
    public id: number
    public nome: string
    public telefone: string
    public rua: string
    public numero: string
    public bairro: string
    public cidade: string
    public estado: string
    public profissionais: Profissional[]

    
}