import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
    providedIn: 'root'
})
export class CursosService {

    constructor(private http: HttpClient) { }

    getCursos() {
        return this.http.get<IApiReturn<any>>(`http://localhost:3333/Cursos`)
    }
    deleteCurso(id) {
        return this.http.get<IApiReturn<any>>(`http://localhost:3333/Cursos/delete/${id}`)
    }

}