import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
  providedIn: 'root'
})
export class AtividadesService {

  constructor(private http: HttpClient) { }

  getAtividade(id:string) {
      return this.http.get<IApiReturn<any>>(`http://localhost:3333/AtividadesDisciplina/`+id)
  }
  sendAtividade(data: any) {
    return this.http.post<IApiReturn<any>>(`http://localhost:3333/Atividades`, data)
  }
}
