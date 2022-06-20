import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profissional } from 'src/app/model/profissional';
import { Hospital } from '../../../model/hospital';
import { HospitalService } from '../../../service/hospital/hospital.service';

@Component({
  selector: 'app-view-hospital',
  templateUrl: './view-hospital.component.html',
  styleUrls: ['./view-hospital.component.scss']
})
export class ViewHospitalComponent implements OnInit {
  hospital: Hospital
  profissionais : Profissional[]
  
  constructor(
    private router: Router,
    private hospitalService: HospitalService,
    private route: ActivatedRoute,
    ) { 
    this.hospital = new Hospital();
    this.setHospitalByUrlParam();
  }

  ngOnInit(): void {
  }
  setHospitalByUrlParam() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.hospitalService.getHospitalById(id).subscribe((resp) => this.hospital = Hospital.fromDTO(resp))
    console.log(this.hospital.profissionais)
  }
  
  inicio() {
    this.router.navigateByUrl('hospitais');
  }
}