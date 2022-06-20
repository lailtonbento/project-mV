import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Hospital } from 'src/app/model/hospital';
import { HospitalService } from 'src/app/service/hospital/hospital.service';
import { Profissional } from '../../../model/profissional';
import { ProfissionalService } from '../../../service/profissional/profissional.service';

@Component({
  selector: 'app-edit-profissional',
  templateUrl: './edit-profissional.component.html',
  styleUrls: ['./edit-profissional.component.scss']
})
export class EditProfissionalComponent implements OnInit {

  profissionalFormulario: FormGroup;
  profissional: Profissional;
  hospitais: Hospital[] = [];
  hospitaisSelecionados: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private profissionalService: ProfissionalService,
    private hospitalService: HospitalService,
    private messageService: MessageService
  ) {
    this.profissional = new Profissional();
    this.setProfissionalByUrlParam().finally(() => {
      console.log(this.profissional)
      this.profissionalFormulario = new FormGroup({
        nome: new FormControl(this.profissional.nome || ''),
        telefone: new FormControl(this.profissional.telefone || ''),
        cargo: new FormControl(this.profissional.cargo || ''),
        rua: new FormControl(this.profissional.endereco.rua || ''),
        numero: new FormControl(this.profissional.endereco.numero || ''),
        bairro: new FormControl(this.profissional.endereco.bairro || ''),
        cidade: new FormControl(this.profissional.endereco.cidade || ''),
        estado: new FormControl(this.profissional.endereco.estado || ''),
        hospitais: new FormControl(this.profissional.hospitais.map(hospital => hospital.id))
      });
    });
  }
  ngOnInit(): void {
    this.getHospitais();

  }

  editFormSubmit() {
    let profissional: Profissional = this.profissionalFormulario.value;
    profissional.hospitais = this.profissionalFormulario.value.hospitais.map(id => Hospital.withId(id))
    profissional.endereco = {
      rua: this.profissionalFormulario.value.rua,
      bairro: this.profissionalFormulario.value.bairro,
      numero: this.profissionalFormulario.value.numero,
      cidade: this.profissionalFormulario.value.cidade,
      estado: this.profissionalFormulario.value.estado,
    };
    console.log(this.profissionalFormulario.value.hospitais)
    console.log(this.hospitaisSelecionados)

    this.profissionalService.update(this.getIdFromUrl(), profissional).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Bem-sucedido', detail: 'Profissional editado com sucesso', life: 3000 })
    });
    this.inicio();
  }
  setHospitais() {
    this.profissionalFormulario.patchValue({
      hospitais: this.hospitaisSelecionados
    });
  }
  setFormProfissional(profissional: Profissional) {
    this.profissional = profissional;
  }
  getHospitais() {
    this.hospitalService.findAllPageable().subscribe(response => {
      this.hospitais = response.content.map(hospital => Hospital.fromDTO(hospital));
    })
  }

  async setProfissionalByUrlParam() {
    const id: number = this.getIdFromUrl();
    const profissional: Profissional = Profissional.fromDTO(await this.profissionalService.getProfissionalById(id).toPromise())
    this.setFormProfissional(profissional)
    this.profissionalFormulario.patchValue({
      hospitais: profissional.hospitais.map(hospital => hospital.id)
    }
    )

    // this.profissionalService.getProfissionalById(id).subscribe(
    // (profissional) => {
    //    this.setFormProfissional(Profissional.fromDTO(profissional))
    //   });
  }

  getIdFromUrl(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  inicio() {
    this.router.navigateByUrl('profissionais');
  }

}
