import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
  providedIn: 'root'
})
export class CadastroClasseService {

  constructor(private http: HttpClient) { }

  getCursos() {
      return this.http.get<IApiReturn<any>>(`http://localhost:3333/Cursos`)
  }

  sendClasse(data: any) {
    return this.http.post<IApiReturn<any>>(`http://localhost:3333/Classe`, data)
  }
}
