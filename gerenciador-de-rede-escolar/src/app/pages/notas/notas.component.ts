import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { NotasService } from './notas.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  AcessoId: number
  user: AccountService
  rota: Router
  listaNotas: any[] = []
  constructor(
    private router: Router,
    private auth: AccountService,
    private service: NotasService,
  ) {
    this.rota = this.router
    this.user = this.auth
  }

  ngOnInit(): void {
    this.AcessoId = this.user.userValue.idAcesso ? this.user.userValue.idAcesso : this.user.userValue.codigoDepartamento2.idAcesso.id
    this.load()
  }

  async load() {

    let response = (await lastValueFrom(this.service.getNotas(this.user.userValue.id))).listaResultados
    console.log(response)
    this.listaNotas = response

  }

}
