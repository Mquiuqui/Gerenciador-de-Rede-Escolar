import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
  providedIn: 'root'
})
export class ListarMatriculasService {

  constructor(private http: HttpClient) { }

  getMatriculas() {

    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Matriculas`)
  }
  aprovar(id:string) {

    return this.http.post<IApiReturn<any>>(`http://localhost:3333/aprovarMatricula`,{id:id})
  }
}
