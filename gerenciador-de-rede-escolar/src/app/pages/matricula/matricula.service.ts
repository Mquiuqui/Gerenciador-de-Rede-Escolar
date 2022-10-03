import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  constructor(private http: HttpClient) { }

  sendMatricula(data: any) {
    console.log("teste2",data)
    return this.http.post<IApiReturn<any>>(`http://localhost:3333/Matricula`, data)
  }

  getCursos() {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Cursos`)
  }
}
