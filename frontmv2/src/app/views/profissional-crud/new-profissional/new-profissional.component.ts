import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Hospital } from 'src/app/model/hospital';
import { HospitalService } from 'src/app/service/hospital/hospital.service';

import { Profissional } from '../../../model/profissional';
import { ProfissionalService } from '../../../service/profissional/profissional.service';

@Component({
  selector: 'app-new-profissional',
  templateUrl: './new-profissional.component.html',
  styleUrls: ['./new-profissional.component.scss']
})
export class NewProfissionalComponent implements OnInit {

  profissionalFormulario: FormGroup;
  profissional: Profissional;
  hospitais: Hospital[] = [];
  hospitaisSelecionados: any[] = [];

  constructor(
    private router: Router,
    private profissionalService: ProfissionalService,
    private messageService: MessageService,
    private hospitalService: HospitalService
  ) {
    this.profissional = new Profissional();
    this.profissionalFormulario = new FormGroup({
      nome: new FormControl(''),
      telefone: new FormControl(''),
      cargo: new FormControl(''),
      hospitais: new FormControl([]),
      rua: new FormControl(''),
      numero: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl('')
    });
    this.getHospitais();
  }
  ngOnInit(): void {
  }


  saveProfissional() {
    this.setHospitais();
    let profissional: Profissional = this.profissionalFormulario.value;
    profissional.endereco = {
      rua: this.profissionalFormulario.value.rua,
      bairro: this.profissionalFormulario.value.bairro,
      numero: this.profissionalFormulario.value.numero,
      cidade: this.profissionalFormulario.value.cidade,
      estado: this.profissionalFormulario.value.estado,
    };
    this.profissionalService.save(profissional).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Bem-sucedido', detail: 'Profissional salvo com sucesso', life: 2000 })
    });

    this.inicio();
  }

  getHospitais() {
    this.hospitalService.findAllPageable().subscribe(response => {
      this.hospitais = response.content.map(hospital => Hospital.fromDTO(hospital));
    })
  }

  setHospitais() {
    this.hospitaisSelecionados = (this.profissionalFormulario.value.hospitais as number[]).map(id => ({ id }))
    console.log(this.profissionalFormulario.value)
    this.profissionalFormulario.patchValue({
      hospitais: this.hospitaisSelecionados
    });
  }

  inicio() {
    this.router.navigateByUrl('profissionais');
  }

  resetForm() {
    this.profissionalFormulario.reset();
  }


}
