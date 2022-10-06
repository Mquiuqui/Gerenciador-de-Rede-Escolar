import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { FuncionarioService } from '../funcionario/funcionario.service';
import { DisciplinasService } from './disciplinas.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  rota: Router
  listaDisciplinas: any[]
  AcessoId:number
  user:AccountService
  constructor(
    private router: Router,
    private service: DisciplinasService,
    private auth: AccountService,    

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
    if(this.AcessoId === 4){
      let response = (await lastValueFrom(this.service.getDisciplinasProfessor(this.user.userValue.professors[0].id))).listaResultados
      console.log(response)
      this.listaDisciplinas = response
      return
    }

    let response = (await lastValueFrom(this.service.getDisciplinas())).listaResultados
    console.log(response)
    this.listaDisciplinas = response
  
  }

}
