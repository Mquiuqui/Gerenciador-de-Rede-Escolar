import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject, lastValueFrom, Observable } from 'rxjs'
import { IApiReturn } from 'd:/Trabalho/defense/defense-access-front/src/app/core/types/IApiReturn'
import { IUser } from 'd:/Trabalho/defense/defense-access-front/src/app/core/types/IUser'
import { environment } from 'src/environments/environment'
import bd from './users.json'

@Injectable({ providedIn: 'root' })
export class AccountService {

    private userSubject: BehaviorSubject<any>
    public user: Observable<IUser | null>

    constructor(
        private router: Router,
        private http: HttpClient
    ) {

        this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user') || 'null'))
        this.user = this.userSubject.asObservable()

    }

    public get userValue(): IUser | null {

        return this.userSubject.value

    }

    async login(login: string, password: string) {
        console.log(">>>>>>>",login,password)
        const user = bd.find(u => u.login === login && u.password === password)
        console.log(user)
        // try {
                      
        //     const response$ = this.http.post<IApiReturn<IUser>>(`${environment.backDomain}/users/login`, {
        //         login,
        //         senha:password
        //     })
            
        //     const response = (await lastValueFrom(response$))

        //     if (!response.flagErro) {


        //         localStorage.setItem('user', JSON.stringify({ ...response.listaResultados }))
        //         this.userSubject.next({ ...response.listaResultados})

        //     }

        //     return response

        this.userSubject.next(user)
        localStorage.setItem('user', JSON.stringify(user))
        return user

        // } catch (error) {
        //     console.log("erro")
        //     return null
        // }

    }

    logout() {

        localStorage.removeItem('user')
        this.userSubject.next(null)
        this.router.navigate(['/'])

    }

}
