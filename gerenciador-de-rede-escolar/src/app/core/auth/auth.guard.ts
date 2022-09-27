import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AccountService } from './auth.account.service'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private accountService: AccountService
    ) { }

    canActivate() {

        const user = this.accountService.userValue
        if (user) return true

        this.router.navigate(['/login'])
        return false

    }

}
