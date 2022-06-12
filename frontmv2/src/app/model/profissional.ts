
import { ProfissionalDTO } from './dto/profissionalDTO';
import { Endereco } from './endereco';
import { Hospital } from './hospital';

export class Profissional {
    id: number
    nome: string
    telefone: string
    cargo: string
    endereco: Endereco

    hospitais: Hospital[]
    
    static fromDTO  ( dto: ProfissionalDTO ) : Profissional{
      let profissional = new Profissional()
      profissional.id = dto.id
      profissional.nome = dto.nome
      profissional.telefone = dto.telefone
      profissional.hospitais = dto.hospitais
      profissional.cargo = dto.cargo
      profissional.endereco = dto.endereco
      return profissional
    }
  
    
    toDTO(): ProfissionalDTO {
      let dto = new ProfissionalDTO()
      dto.id = this.id
      dto.nome = this.nome
      dto.telefone = this.telefone
      dto.cargo = this.cargo
      dto.hospitais = this.hospitais
      dto.endereco = this.endereco

      return dto
  }
}