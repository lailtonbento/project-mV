import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profissionais',
    loadChildren: () =>
      import('./views/profissional-crud/profissional-routing.module').then(
        (m) => m.ProfissionalRoutingModule
      )
  },
  {
    path: 'hospitais',
    loadChildren: () =>
      import('./views/hospital-crud/hospital-routing.module').then(
        (m) => m.HospitalRoutingModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
