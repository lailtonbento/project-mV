
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfissionalDTO } from 'src/app/model/dto/profissionalDTO';
import { Page } from 'src/app/model/page/page.interface';
import { Profissional } from 'src/app/model/profissional';


@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/api/v1/profissionais'


  findAllPageable(page = 0, size?: number) {
    return this.httpClient.get<Page<ProfissionalDTO>>(`${this.API}?page=${page}${size ? `&size=${size}` : ``}`);
  }
  public getProfissionalById(id: number) {
    return this.httpClient.get<ProfissionalDTO>(`${this.API}/${id}`);
  }

  update(id: number, profissional: Profissional) {
    return this.httpClient.put<ProfissionalDTO>(`${this.API}/${id}`, profissional)
  }

  save(profissional: Profissional) {
    return this.httpClient.post<ProfissionalDTO>(`${this.API}`, profissional)
  }

  deleteById(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`)
  }

  deleteByIds(ids: Array<Number>) {
    return this.httpClient.delete(`${this.API}/?ids=${ids.join(",")}`)
  }

}