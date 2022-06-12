import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HospitalService } from 'src/app/service/hospital/hospital.service';
import { Hospital } from '../../../model/hospital';

@Component({
  selector: 'app-list-hospital',
  templateUrl: './list-hospital.component.html',
  styleUrls: ['./list-hospital.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ListHospitalComponent implements OnInit {

  hospitais : Hospital[] = []
  hospital: Hospital

  constructor(
    private router : Router,
    private hospitalService: HospitalService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { 
    this.getHospitais();
  }

  ngOnInit(): void {

  }

  getHospitais(page = 0, size = 10) {
    this.hospitalService.findAllPageable().subscribe(response => {
      this.hospitais = response.content;
    })
  }

  newHospital(){
    this.router.navigateByUrl('/hospitais/new');
  }
  editHospital(hospital: Hospital){
    this.router.navigateByUrl(`/hospitais/edit/${hospital.id}`)
  }
  viewHospital(hospital: Hospital){
    this.hospital = hospital
    this.router.navigateByUrl(`/hospitais/view/${hospital.id}`)
  }

  deleteHospital(hospital: Hospital) {
    console.log(hospital);
    console.log(this.hospitais);
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir ' + hospital.nome + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.hospitalService.deleteById(hospital.id!).subscribe(() => {
          this.getHospitais();
          this.messageService.add({ severity: 'success', summary: 'Bem-sucedido', detail: 'Hospital Deletado', life: 2000 })
        });
      }
    
    });
  }
  
}
