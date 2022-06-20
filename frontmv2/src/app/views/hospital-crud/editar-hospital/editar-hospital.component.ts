import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Hospital } from 'src/app/model/hospital';
import { HospitalService } from 'src/app/service/hospital/hospital.service';

@Component({
  selector: 'app-editar-hospital',
  templateUrl: './editar-hospital.component.html',
  styleUrls: ['./editar-hospital.component.scss']
})
export class EditarHospitalComponent implements OnInit {


  hospitalFormulario: FormGroup;
  hospital: Hospital;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private hospitalService: HospitalService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.hospital = new Hospital();
    this.setHospitalByUrlParam()
    this.hospitalFormulario = new FormGroup({
      nome: new FormControl(''),
      telefone: new FormControl(''),
      rua: new FormControl(''),
      numero: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl( ''),
    });



  }
  ngOnInit(): void {
  }

  editFormSubmit() {
    let hospital: Hospital = this.hospitalFormulario.value;
    hospital.endereco = {
      rua: this.hospitalFormulario.value.rua,
      bairro: this.hospitalFormulario.value.bairro,
      numero: this.hospitalFormulario.value.numero,
      cidade: this.hospitalFormulario.value.cidade,
      estado: this.hospitalFormulario.value.estado
    };
    this.hospitalService.update(this.getIdFromUrl(), hospital).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Bem-sucedido', detail: 'Hospital editado com sucesso', life: 3000 })
    });
    console.log(this.hospitalFormulario.value)
    this.inicio();
  }

  setFormHospital(hospital: Hospital) {
    this.hospitalFormulario.patchValue({
      nome: hospital.nome,
      telefone: hospital.telefone,
      rua: hospital.endereco?.rua,
      bairro: hospital.endereco?.bairro,
      numero: hospital.endereco?.numero,
      cidade: hospital.endereco?.cidade,
      estado: hospital.endereco?.estado
    })
    this.hospital = hospital;
  }

  setHospitalByUrlParam() {
    const id: number = this.getIdFromUrl();
    this.hospitalService.getHospitalById(id).subscribe((hospital) => { this.setFormHospital(Hospital.fromDTO(hospital)) });
  }

  getIdFromUrl(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }


  inicio() {
    this.router.navigateByUrl('hospitais');
  }

}