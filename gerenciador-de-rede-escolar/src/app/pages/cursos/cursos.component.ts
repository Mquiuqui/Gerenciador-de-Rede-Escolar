import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  rota: Router
  user: AccountService
  AcessoId: number
  listaCursos: any[] =[]
  constructor(
    private router: Router,
    private service: CursosService,
    private auth: AccountService
  ) {
    this.rota = this.router
    this.user = this.auth
  }
    ngOnInit(): void {
        this.cursos()
        }

    async cursos(){
        let response = (await lastValueFrom(this.service.getCursos())).listaResultados
        this.listaCursos = response
    }


}
