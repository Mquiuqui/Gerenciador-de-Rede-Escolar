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
    constructor(
        private auth: AccountService,
        private route: Router
    ) {
        this.user = this.auth
        this.rota = this.route
    }

    ngOnInit(): void {
        console.log(this.user.userValue)
    }

    logout() {
        console.log("logout")
        this.auth.logout()
    }
}
