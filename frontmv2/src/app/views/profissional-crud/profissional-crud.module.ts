import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProfissionalComponent } from './list-profissional/list-profissional.component';
import { NewProfissionalComponent } from './new-profissional/new-profissional.component';
import { EditProfissionalComponent } from './edit-profissional/edit-profissional.component';
import { ViewProfissionalComponent } from './view-profissional/view-profissional.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppComponent } from 'src/app/app.component';
import { NavComponent } from 'src/app/components/template/nav/nav.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ListProfissionalComponent,
    NewProfissionalComponent,
    EditProfissionalComponent,
    ViewProfissionalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProfissionalCrudModule { }
