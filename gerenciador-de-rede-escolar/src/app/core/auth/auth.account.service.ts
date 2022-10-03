import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject, lastValueFrom, Observable } from 'rxjs'

import { environment } from 'src/environments/environment'
import { IApiReturn } from 'src/types/IApiReturn'
import { IUser } from 'src/types/IUser'
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

    public get userValue(): any | null {

        return this.userSubject.value

    }

    async login(login: string, password: string) {
        // console.log(">>>>>>>",login,password)
        // const user = bd.find(u => u.id === Number(login) && u.password === password)
        // console.log(user)
        try {
            console.log("teste")          
            const response$ = this.http.post<IApiReturn<any>>(`http://localhost:3333/aluno/login`, {
                login:Number(login),
                senha:password
            })
            
            const response = (await lastValueFrom(response$))

            if (!response.flagErro) {

                console.log("logado")
                localStorage.setItem('user', JSON.stringify({ ...response.listaResultados }))
                this.userSubject.next({ ...response.listaResultados})

            }

            return response

        // this.userSubject.next(user)
        // localStorage.setItem('user', JSON.stringify(user))
        // return user

        } catch (error) {
            console.log("erro",error.error)
            return error.error
        }

    }

    async loginFuncionario(login: string, password: string) {
        // console.log(">>>>>>>",login,password)
        // const user = bd.find(u => u.id === Number(login) && u.password === password)
        // console.log(user)
        try {
            console.log("teste")          
            const response$ = this.http.post<IApiReturn<any>>(`http://localhost:3333/funcionario/login`, {
                login:Number(login),
                senha:password
            })
            
            const response = (await lastValueFrom(response$))

            if (!response.flagErro) {

                console.log("logado")
                localStorage.setItem('user', JSON.stringify({ ...response.listaResultados }))
                this.userSubject.next({ ...response.listaResultados})

            }

            return response

        // this.userSubject.next(user)
        // localStorage.setItem('user', JSON.stringify(user))
        // return user

        } catch (error) {
            console.log("erro",error.error)
            return error.error
        }

    }

    logout() {

        localStorage.removeItem('user')
        this.userSubject.next(null)
        this.router.navigate(['/'])

    }

}
