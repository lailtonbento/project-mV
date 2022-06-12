
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from 'src/app/model/page/page.interface';
import { Profissional } from 'src/app/model/profissional';


@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/api/v1/profissionais'


  findAllPageable(page = 0, size?: number) {
    return this.httpClient.get<Page<Profissional>>(`${this.API}?page=${page}${size ? `&size=${size}` : ``}`);
  }
  public getProfissionalById(id: number) {
    return this.httpClient.get<Profissional>(`${this.API}/${id}`);
  }

  update(id: number, profissional: Profissional) {
    return this.httpClient.put<Profissional>(`${this.API}/${id}`, profissional)
  }

  save(profissional: Profissional) {
    return this.httpClient.post<Profissional>(`${this.API}`, profissional)
  }

  deleteById(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`)
  }

  deleteByIds(ids: Array<Number>) {
    return this.httpClient.delete(`${this.API}/?ids=${ids.join(",")}`)
  }

}