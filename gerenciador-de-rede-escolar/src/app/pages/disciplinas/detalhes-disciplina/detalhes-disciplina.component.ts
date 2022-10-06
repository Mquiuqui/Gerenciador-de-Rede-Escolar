import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { DetalhesDisciplinaService } from './detalhes-disciplina.service';

@Component({
  selector: 'app-detalhes-disciplina',
  templateUrl: './detalhes-disciplina.component.html',
  styleUrls: ['./detalhes-disciplina.component.css']
})
export class DetalhesDisciplinaComponent implements OnInit {

  rota: Router
  listaDisciplinas: any[]
  AcessoId:number
  user:AccountService
  constructor(
    private router: Router,
    private service: DetalhesDisciplinaService,
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
    // if(this.AcessoId === 4){
    //   let response = (await lastValueFrom(this.service.getDisciplinasProfessor(this.user.userValue.professors[0].id))).listaResultados
    //   console.log(response)
    //   this.listaDisciplinas = response
    //   return
    // }

    // let response = (await lastValueFrom(this.service.getDisciplinas())).listaResultados
    // console.log(response)
    // this.listaDisciplinas = response
  
  }

}
