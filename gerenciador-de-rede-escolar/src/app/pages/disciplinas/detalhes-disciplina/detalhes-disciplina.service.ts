import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
  providedIn: 'root'
})
export class DetalhesDisciplinaService {

  constructor(private http: HttpClient) { }
  getAlunos(id: string) {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/MatriculaDisciplina/` + id)
  }
  getAtividade(id: string) {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/AtividadesDisciplina/` + id)
  }

  getNotas(data:any) {
    return this.http.post<IApiReturn<any>>(`http://localhost:3333/Notas`, data)
  }

  sendNota(data: any) {
    return this.http.post<IApiReturn<any>>(`http://localhost:3333/Nota`, data)
  }
  sendOcorrencia(data: any) {
    return this.http.post<IApiReturn<any>>(`http://localhost:3333/Ocorrencia`, data)
  }
}
