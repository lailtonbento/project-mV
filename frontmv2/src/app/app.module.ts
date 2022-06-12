import { EditProfissionalComponent } from './views/profissional-crud/edit-profissional/edit-profissional.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HospitalCrudModule } from './views/hospital-crud/hospital-crud.module';
import { ProfissionalCrudModule } from './views/profissional-crud/profissional-crud.module';


import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ComponentsModule } from './components/components.module';




@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HospitalCrudModule,
    ProfissionalCrudModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
