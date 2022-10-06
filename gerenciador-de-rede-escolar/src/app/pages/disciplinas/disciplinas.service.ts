import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {

  constructor(private http: HttpClient) { }

  getDisciplinas() {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Disciplinas`)
  }

  getDisciplinasProfessor(id:string) {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/DisciplinasProfessor/${id}`)
  }

}
