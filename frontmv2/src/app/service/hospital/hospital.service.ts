import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from 'src/app/model/hospital';
import { Page } from 'src/app/model/page/page.interface';

@Injectable({
  providedIn: 'root'
})

export class HospitalService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/api/v1/hospitais'

  findAllPageable(page = 0, size?: number) {
    return this.httpClient.get<Page<Hospital>>(`${this.API}?page=${page}${size ? `&size=${size}` : ``}`);
  }


  public getHospitalById(id: number) {
    return this.httpClient.get<Hospital>(`${this.API}/${id}`);
  }

  update(id: number, hospital: Hospital) {
    return this.httpClient.put<Hospital>(`${this.API}/${id}`, hospital)
  }

  save(hospital: Hospital) {
    return this.httpClient.post<Hospital>(`${this.API}`, hospital)
  }

  deleteById(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`)
  }

  deleteByIds(ids: Array<Number>) {
    return this.httpClient.delete(`${this.API}/?ids=${ids.join(",")}`)
  }
}