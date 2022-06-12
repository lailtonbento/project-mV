import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from 'src/app/model/hospital';
import { Profissional } from 'src/app/model/profissional';
import { HospitalService } from 'src/app/service/hospital/hospital.service';
import { ProfissionalService } from '../../../service/profissional/profissional.service';

@Component({
  selector: 'app-view-profissional',
  templateUrl: './view-profissional.component.html',
  styleUrls: ['./view-profissional.component.scss']
})
export class ViewProfissionalComponent implements OnInit {

  profissional: Profissional
  hospitais: Hospital[] = [];
  hospitaisSelecionados: Number[] = [];

  constructor(
    private router: Router,
    private profissionalService: ProfissionalService,
    private hospitalService: HospitalService,
    private route: ActivatedRoute,
    ) { 

  }

  async ngOnInit() {
    this.profissional = new Profissional();
    await this.setProfissionalByUrlParam();
    this.getHospitais();
    this.getHospitaisSelecionados();
    console.log(this.profissional)
  }
  async setProfissionalByUrlParam() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.profissional = await this.profissionalService.getProfissionalById(id).toPromise()
    //this.profissionalService.getProfissionalById(id).subscribe((resp) => this.profissional = Profissional.fromDTO(resp))
  
  }
  getHospitais() {
    this.hospitalService.findAllPageable().subscribe(response => {
      this.hospitais = response.content;
    })
  }
  
  getHospitaisSelecionados(){
    //console.log(this.profissional)
    this.hospitaisSelecionados = this.profissional.hospitais.map(hospital => hospital.id);
    //console.log(this.hospitaisSelecionados)
    //console.log(this.profissional.hospitais)
    //console.log(this.hospitais)
  }

  inicio() {
    this.router.navigateByUrl('profissionais');
  }
}
