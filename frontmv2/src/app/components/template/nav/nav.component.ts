import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Home', icon: 'pi pi-fw pi-home', routerLink:['/home']},
          {label: 'Hospitais', icon: 'pi pi-fw pi-building', routerLink:['/hospitais']},
          {label: 'Profissionais', icon: 'pi pi-fw pi-user', routerLink:['/profissionais']},
      ];
  }
}
