import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { OcorrenciasService } from './ocorrencias.service';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.css']
})
export class OcorrenciasComponent implements OnInit {
  AcessoId: number
  user: AccountService
  rota: Router
  listaOcorrencias: any[] = []
  constructor(
    private router: Router,
    private auth: AccountService,
    private service: OcorrenciasService,
  ) {
    this.rota = this.router
    this.user = this.auth
  }

  ngOnInit(): void {
    this.AcessoId = this.user.userValue.idAcesso ? this.user.userValue.idAcesso : this.user.userValue.codigoDepartamento2.idAcesso.id
    this.load()
  }
  async load() {
    let response = (await lastValueFrom(this.service.getOcorrencias(this.user.userValue.id))).listaResultados
    console.log(response)
    this.listaOcorrencias = response

  }

}
