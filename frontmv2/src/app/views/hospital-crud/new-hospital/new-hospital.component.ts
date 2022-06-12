import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Hospital } from 'src/app/model/hospital';
import { Profissional } from 'src/app/model/profissional';
import { HospitalService } from 'src/app/service/hospital/hospital.service';

@Component({
  selector: 'app-new-hospital',
  templateUrl: './new-hospital.component.html',
  styleUrls: ['./new-hospital.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class NewHospitalComponent implements OnInit {

  hospitalFormulario: FormGroup;
  hospital: Hospital;
  profissionais: Profissional[]
  
  constructor(
    private router: Router,
    private hospitalService: HospitalService,
    private messageService: MessageService
  ) {
    this.hospital = new Hospital();
    this.hospitalFormulario = new FormGroup({
      nome: new FormControl('' ),
      telefone: new FormControl(''),
      rua: new FormControl(''),
      numero: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl('')
    });

  }
  ngOnInit(): void {
  }


  saveHospital() {
    let hospital: Hospital = this.hospitalFormulario.value;
    hospital.endereco = {
      rua: this.hospitalFormulario.value.rua,
      bairro: this.hospitalFormulario.value.bairro,
      numero: this.hospitalFormulario.value.numero,
      cidade: this.hospitalFormulario.value.cidade,
      estado: this.hospitalFormulario.value.estado,
    };
    this.hospitalService.save(hospital).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Bem-sucedido', detail: 'Hospital salvo com sucesso', life: 2000 })
    });
    console.log(this.hospitalFormulario.value)
    this.inicio();
  }
 
  inicio() {
    this.router.navigateByUrl('hospitais');
  }

  resetForm() {
    this.hospitalFormulario.reset();
  }

}
