import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { IUser } from 'src/types/IUser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    rota: Router
    user: AccountService
    AcessoId: number
    constructor(
        private auth: AccountService,
        private route: Router
    ) {
        this.user = this.auth
        this.rota = this.route
    }

    ngOnInit(): void {
        console.log(this.user.userValue.idAcesso)
        this.AcessoId = this.user.userValue.idAcesso ? this.user.userValue.idAcesso : this.user.userValue.codigoDepartamento2.idAcesso.id

        setTimeout(() => {
            if (this.user.userValue.ocorrencias.length > 0) {
                alert('Você possui: ' + this.user.userValue.ocorrencias.length + ' ocorrências')
            }
        }, 2000)

    }

    logout() {
        console.log("logout")
        this.auth.logout()
    }

    info() {
        console.log("teste")
    }
}
