import { IApiReturn } from './../../../../types/IApiReturn.d';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarUnidadesService {

  constructor(
    private http: HttpClient
  ) { }

  getUnidades() {

    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Matriculas`)
  }


}
