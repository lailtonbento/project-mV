import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProfissionalComponent } from './list-profissional/list-profissional.component';
import { NewProfissionalComponent } from './new-profissional/new-profissional.component';
import { EditProfissionalComponent } from './edit-profissional/edit-profissional.component';
import { ViewProfissionalComponent } from './view-profissional/view-profissional.component';


const routes: Routes = [
  {
    path: '', component: ListProfissionalComponent
  },
  {
    path:'new', component: NewProfissionalComponent
  },
  {
    path:'view/:id', component: ViewProfissionalComponent
  },
  {
    path:'edit/:id', component: EditProfissionalComponent
  }

]
  

@NgModule({
  imports: [RouterModule.forChild(routes)], 
})
export class ProfissionalRoutingModule { }
