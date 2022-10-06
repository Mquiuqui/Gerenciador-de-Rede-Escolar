import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { ListarMatriculasService } from './listar-matriculas.service';

@Component({
  selector: 'app-listar-matriculas',
  templateUrl: './listar-matriculas.component.html',
  styleUrls: ['./listar-matriculas.component.css']
})
export class ListarMatriculasComponent implements OnInit {

  rota: Router
  user: AccountService
  AcessoId: number
  listaMatriculas: any[] = []
  constructor(
    private router: Router,
    private service: ListarMatriculasService,
    private auth: AccountService
  ) {
    this.rota = this.router
    this.user = this.auth
  }
  ngOnInit(): void {
    this.cursos()
  }

  async cursos() {
    let response = (await lastValueFrom(this.service.getMatriculas())).listaResultados
    this.listaMatriculas = response
  }

  async aprovar(id: string) {
    let response = (await lastValueFrom(this.service.aprovar(id))).listaResultados
    this.listaMatriculas = response
  }

}
