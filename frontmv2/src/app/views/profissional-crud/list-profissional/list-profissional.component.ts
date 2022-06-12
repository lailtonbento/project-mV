import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Profissional } from 'src/app/model/profissional';
import { ProfissionalService } from '../../../service/profissional/profissional.service';

@Component({
  selector: 'app-list-profissional',
  templateUrl: './list-profissional.component.html',
  styleUrls: ['./list-profissional.component.scss']
})
export class ListProfissionalComponent implements OnInit {

  
  constructor(
    private router : Router,
    private profissionalService: ProfissionalService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { 
    this.getProfissionais();
  }

  ngOnInit(): void {
  }
  profissionais : Profissional[] = []
  profissional: Profissional

  getProfissionais(page = 0, size = 10) {
    this.profissionalService.findAllPageable().subscribe(response => {
      this.profissionais = response.content;
    })
  }

  newProfissional(){
    this.router.navigateByUrl('/profissionais/new');
  }
  editProfissional(profissional: Profissional){
    this.router.navigateByUrl(`/profissionais/edit/${profissional.id}`)
  }
  viewProfissional(profissional: Profissional){
    this.profissional = profissional
    this.router.navigateByUrl(`/profissionais/view/${profissional.id}`)
  }

  deleteProfissional(profissional: Profissional) {
    console.log(profissional);
    console.log(this.profissionais);
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir ' + profissional.nome + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.profissionalService.deleteById(profissional.id!).subscribe(() => {
          this.getProfissionais();
          this.messageService.add({ severity: 'success', summary: 'Bem-sucedido', detail: 'Profissional Deletado', life: 2000 })
        });
      }
    
    });
  }
  
}
