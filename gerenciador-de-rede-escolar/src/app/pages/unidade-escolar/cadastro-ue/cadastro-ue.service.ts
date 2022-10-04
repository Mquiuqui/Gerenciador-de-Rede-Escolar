import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
  providedIn: 'root'
})
export class CadastroUeService {

  constructor(private http: HttpClient) { }

  sendUE(data: any) {

    return this.http.post<IApiReturn<any>>(`http://localhost:3333/Unidades`, data)
  }

  getCursos() {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Cursos`)
  }
}
