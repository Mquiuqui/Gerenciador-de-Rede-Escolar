import { ListarUnidadesService } from './listar-unidades.service';
import { UnidadeEscolar } from './../../../model/UnidadeEscolar';
import { lastValueFrom } from 'rxjs';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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

  constructor(
    private router: Router,
    public authService: ListarUnidadesService,
    private auth: AccountService
  ) {
    this.rota = this.router
    this.user = this.auth
  }

  ngOnInit(): void {
  }



}
