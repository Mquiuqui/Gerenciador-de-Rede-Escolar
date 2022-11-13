import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { CadastroUeService } from './cadastro-ue/cadastro-ue.service';

@Component({
  selector: 'app-unidade-escolar',
  templateUrl: './unidade-escolar.component.html',
  styleUrls: ['./unidade-escolar.component.css']
})
export class UnidadeEscolarComponent implements OnInit {

  user: AccountService
  rota: Router
  listaUnidadeE:any[]
  constructor(
    private router: Router,
    private service: CadastroUeService,
    private flash: FlashMessageService,
    private auth: AccountService,
  ) {
    this.rota = this.router
    this.user = this.auth
  }

  ngOnInit(): void {
    this.load()
  }

  async load() {

    let response = (await lastValueFrom(this.service.getUnidadeEscolar())).listaResultados
    console.log(response)
    this.listaUnidadeE = response

  }

  async remove(id){
    let data = {id:id}
    let response = (await lastValueFrom(this.service.deleteUnidadeEscolar(data))).listaResultados
    this.load()
  }

}
