import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
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
    listaCursos: any[] = []
    constructor(
        private router: Router,
        private service: CursosService,
        private auth: AccountService,
        private flash: FlashMessageService
    ) {
        this.rota = this.router
        this.user = this.auth
    }
    ngOnInit(): void {
        this.cursos()
    }

    async cursos() {
        let response = (await lastValueFrom(this.service.getCursos())).listaResultados
        this.listaCursos = response
    }

    async deleteCurso(id: number) {
        let response = (await lastValueFrom(this.service.deleteCurso(id)))
        if (response.flagErro) {
            this.flash.show("O Curso possui Classes Ativas", 'error')
            return
        }
        this.cursos()
    }


}
