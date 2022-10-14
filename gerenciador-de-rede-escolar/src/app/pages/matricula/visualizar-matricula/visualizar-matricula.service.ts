import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
  providedIn: 'root'
})
export class VisualizarMatriculaService {


  constructor(private http: HttpClient) { }

  getMatricula(id: string) {

    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Matricula/` + id)

  }

  getClasses(id: string) {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Classes/`+id)
  }

  aprovar(id:string,idClasse:string) {
    return this.http.post<IApiReturn<any>>(`http://localhost:3333/aprovarMatricula`,{id:id,idClasse:idClasse})
  }
}
