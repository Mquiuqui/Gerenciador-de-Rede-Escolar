import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
  providedIn: 'root'
})
export class ChamadaService {

  constructor(private http: HttpClient) { }
  getPorAlunos(id: string) {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/ChamadasAluno/` + id)
  }

  getAlunos(id: string) {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/MatriculaDisciplina/` + id)
  }

  getPorProfessor(data:any) {
    return this.http.post<IApiReturn<any>>(`http://localhost:3333/ChamadasProfessor/`, data)
  }

  sendChamada(data: any) {
    return this.http.post<IApiReturn<any>>(`http://localhost:3333/Chamada`, data)
  }

}
