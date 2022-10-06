import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  getFuncionario() {
      return this.http.get<IApiReturn<any>>(`http://localhost:3333/Funcionarios`)
  }

  getCursos() {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Cursos`)
}

  getDepartamento() {
      return this.http.get<IApiReturn<any>>(`http://localhost:3333/Departamentos`)
  }

  sendFuncionario(data: any) {
    return this.http.post<IApiReturn<any>>(`http://localhost:3333/Funcionarios`, data)
  }

}
