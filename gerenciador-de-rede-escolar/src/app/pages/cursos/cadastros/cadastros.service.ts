import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  constructor(private http: HttpClient) { }

  sendCurso(data: any) {
    return this.http.post<IApiReturn<any>>(`http://localhost:3333/Cursos`, data)
  }

  getPeriodo() {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Periodo`)
  }

  getUnidades() {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Unidades`)
  }

  getCurso(id) {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Cursos/${id}`)
  }

}
