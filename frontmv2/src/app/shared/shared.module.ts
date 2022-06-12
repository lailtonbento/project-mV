import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';


const angular = [
  ReactiveFormsModule,
  FormsModule,
]

const primeNg = [
    ListboxModule,
    MenuModule,
    TabMenuModule,
    InputTextModule,
    PanelMenuModule,
    CardModule,
    BreadcrumbModule,
    DialogModule,
    RippleModule,
    ToolbarModule,
    ButtonModule,
    ConfirmDialogModule,
    SplitButtonModule,
    DynamicDialogModule,
    ToastModule,
    TableModule
]
@NgModule({
  declarations: [],
  imports: [CommonModule, ...primeNg, ...angular],
  exports: [...primeNg, ...angular],
})
export class SharedModule { }
