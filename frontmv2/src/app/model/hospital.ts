import { HospitalDTO } from './dto/hospitalDTO';
import { Endereco } from './endereco';
import { Profissional } from './profissional';

export class Hospital {
  id: number
  nome: string
  telefone: string

  endereco: Endereco

  profissionais: Profissional[]

  static withId(id: number): Hospital {
    const hospital = new Hospital();
    hospital.id = id
    return hospital
  }
  static fromDTO(dto: HospitalDTO): Hospital {
    let hospital = new Hospital()
    hospital.id = dto.id
    hospital.nome = dto.nome
    hospital.telefone = dto.telefone
    hospital.profissionais = dto.profissionais
    let endereco = new Endereco();
    endereco.rua = dto.rua
    endereco.numero = dto.numero
    endereco.bairro = dto.bairro
    endereco.cidade = dto.cidade
    endereco.estado = dto.estado
    hospital.endereco = endereco

    return hospital
  }

  toDTO(): HospitalDTO {
    let dto = new HospitalDTO()
    dto.id = this.id
    dto.nome = this.nome
    dto.telefone = this.telefone
    dto.profissionais = this.profissionais
    dto.rua = this.endereco.rua
    dto.numero = this.endereco.numero
    dto.bairro = this.endereco.bairro
    dto.cidade = this.endereco.cidade
    dto.estado = this.endereco.estado



    return dto
  }

}