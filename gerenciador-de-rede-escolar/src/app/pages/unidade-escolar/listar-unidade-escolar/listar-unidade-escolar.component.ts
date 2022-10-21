import { ListarUnidadesService } from './listar-unidades.service';
import { lastValueFrom } from 'rxjs';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UnidadeEscolar } from 'src/app/model/UnidadeEscolar';

@Component({
  selector: 'app-listar-unidade-escolar',
  templateUrl: './listar-unidade-escolar.component.html',
  styleUrls: ['./listar-unidade-escolar.component.css']
})
export class ListarUnidadeEscolarComponent implements OnInit {

  rota: Router
  user: AccountService
  AcessoId: number
  listaUnidade: UnidadeEscolar[]
  unidade: UnidadeEscolar = new UnidadeEscolar()

  constructor(
    private router: Router,
    public service: ListarUnidadesService,
    private auth: AccountService
  ) {
    this.rota = this.router
    this.user = this.auth
  }

  ngOnInit() {
    this.load()
  }

  async load() {

    let response = (await lastValueFrom(this.service.getUnidades())).listaResultados
    console.log(response)
    this.listaUnidade = response

  }
  // unidades(){
  //   this.service.getUnidades().subscribe((resp: UnidadeEscolar[]) => {
  //     this.listaUnidade = resp
  //   })
  // }



}
