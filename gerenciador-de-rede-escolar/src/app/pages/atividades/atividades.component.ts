import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { DetalhesDisciplinaService } from '../disciplinas/detalhes-disciplina/detalhes-disciplina.service';
import { AtividadesService } from './atividades.service';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {
  
  @ViewChild('ModalAtividade', { static: false }) modal: ModalComponent
  
  rota: Router
  listaAtividades: any[]
  AcessoId:number
  user:AccountService
  idDisciplina:number
  constructor(
    private router: Router,
    private routeActive: ActivatedRoute,
    private service: AtividadesService,
    private auth: AccountService,    
    private flashMessageService: FlashMessageService

  ) {
    this.rota = this.router
    this.user = this.auth
  }

  ngOnInit(): void {
    this.AcessoId = this.user.userValue.idAcesso? this.user.userValue.idAcesso : this.user.userValue.codigoDepartamento2.idAcesso.id
    this.load()
    console.log(this.AcessoId)
  }

  async load(){
    this.routeActive.params.subscribe(async data => {
      this.idDisciplina = Number(data["id"]) 
      try {
        const result = (await lastValueFrom(this.service.getAtividade(data["id"]))).listaResultados
        this.listaAtividades = result
        
      } catch (error) {
        this.flashMessageService.show(error.message, 'error')
      }
    })
  
  }

  async submit(evt: any) {
    console.log(this.auth.userValue)
    let data = {
      idDisciplina: this.idDisciplina,
      idProfessor: this.auth.userValue.professors[0].id,
      tituloAtividade: evt.target[0].value,
      dataAtividade: evt.target[1].value,
    }
    console.log(data)
    let response = (await lastValueFrom(this.service.sendAtividade(data)))

    if(!response.flagErro) this.flashMessageService.show(response.listaMensagens[0], 'error');
    this.flashMessageService.show('Salvo com Sucesso', 'success');
    this.load()
    this.modal.toggle()


  }

}
