import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
  providedIn: 'root'
})
export class CadastroDisciplinasService {

  constructor(private http: HttpClient) { }

  getCursos() {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Cursos`)
  }

  getClasses(id:string) {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Classes/${id}`)
  }

  getProfessores() {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Professores`)
  }

  getProfessoresid(id:string) {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Professores/${id}`)
  }

  sendDisciplina(data: any) {
    return this.http.post<IApiReturn<any>>(`http://localhost:3333/Disciplinas`, data)
  }


}
