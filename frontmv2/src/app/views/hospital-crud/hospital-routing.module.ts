import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHospitalComponent } from './list-hospital/list-hospital.component';
import { NewHospitalComponent } from './new-hospital/new-hospital.component';
import { ViewHospitalComponent } from './view-hospital/view-hospital.component';
import { EditarHospitalComponent } from './editar-hospital/editar-hospital.component';

const routes: Routes = [
  {
    path: '',
    component: ListHospitalComponent
  },
  {
    path: 'new',
    component: NewHospitalComponent
  },
  {
    path: 'view/:id',
    component: ViewHospitalComponent
  },
  {
    path: 'edit/:id',
    component: EditarHospitalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
})
export class HospitalRoutingModule { }
