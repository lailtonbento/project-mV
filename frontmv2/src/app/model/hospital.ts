import { HospitalDTO } from './dto/hospitalDTO';
import { Endereco } from './endereco';
import { Profissional } from './profissional';

export class Hospital {
  id: number
  nome: string
  telefone: string

  endereco: Endereco

  profissionais: Profissional[]

  static fromDTO(dto: HospitalDTO): Hospital {
    let hospital = new Hospital()
    hospital.id = dto.id
    hospital.nome = dto.nome
    hospital.telefone = dto.telefone
    hospital.profissionais = dto.profissionais
    hospital.endereco = dto.endereco


    return hospital
  }

  toDTO(): HospitalDTO {
    let dto = new HospitalDTO()
    dto.id = this.id
    dto.nome = this.nome
    dto.telefone = this.telefone
    dto.profissionais = this.profissionais
    dto.endereco = this.endereco

    return dto
  }

}