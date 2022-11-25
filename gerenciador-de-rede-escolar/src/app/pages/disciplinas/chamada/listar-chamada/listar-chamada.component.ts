import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { NotasService } from 'src/app/pages/notas/notas.service';
import { lastValueFrom } from 'rxjs';
import { ChamadaService } from '../chamada.service';

@Component({
  selector: 'app-listar-chamada',
  templateUrl: './listar-chamada.component.html',
  styleUrls: ['./listar-chamada.component.css']
})
export class ListarChamadaComponent implements OnInit {

  AcessoId: number
  user: AccountService
  rota: Router
  listaChamada: any[] = []
  constructor(
    private router: Router,
    private auth: AccountService,
    private service: ChamadaService,
  ) {
    this.rota = this.router
    this.user = this.auth
  }

  ngOnInit(): void {
    this.AcessoId = this.user.userValue.idAcesso ? this.user.userValue.idAcesso : this.user.userValue.codigoDepartamento2.idAcesso
    this.load()
  }

  async load() {

    let response = (await lastValueFrom(this.service.getPorAlunos(this.user.userValue.id))).listaResultados
    console.log(response)
    response.map(itens =>{
      if(itens.length>0){
        this.listaChamada.push(itens)
      }
    })
  }
}
