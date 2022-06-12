import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewHospitalComponent } from './new-hospital/new-hospital.component';
import { ListHospitalComponent } from './list-hospital/list-hospital.component';

import { ViewHospitalComponent } from './view-hospital/view-hospital.component';
import { EditarHospitalComponent } from './editar-hospital/editar-hospital.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    NewHospitalComponent,
    ListHospitalComponent,
    ViewHospitalComponent,
    EditarHospitalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class HospitalCrudModule { }
