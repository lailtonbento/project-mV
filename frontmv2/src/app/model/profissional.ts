
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

  static withId(id: number): Profissional {
    const profissional = new Profissional();
    profissional.id = id
    return profissional
  }
  static fromDTO(dto: ProfissionalDTO): Profissional {
    let profissional = new Profissional()
    profissional.id = dto.id
    profissional.nome = dto.nome
    profissional.telefone = dto.telefone
    profissional.hospitais = dto.hospitais
    profissional.cargo = dto.cargo
    let endereco = new Endereco();
    endereco.rua = dto.rua
    endereco.numero = dto.numero
    endereco.bairro = dto.bairro
    endereco.cidade = dto.cidade
    endereco.estado = dto.estado
    profissional.endereco = endereco
    return profissional
  }


  toDTO(): ProfissionalDTO {
    let dto = new ProfissionalDTO()
    dto.id = this.id
    dto.nome = this.nome
    dto.telefone = this.telefone
    dto.cargo = this.cargo
    dto.hospitais = this.hospitais
    dto.rua = this.endereco.rua
    dto.numero = this.endereco.numero
    dto.bairro = this.endereco.bairro
    dto.cidade = this.endereco.cidade
    dto.estado = this.endereco.estado

    return dto
  }
}