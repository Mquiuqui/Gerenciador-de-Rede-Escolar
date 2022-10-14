import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciasService {

  constructor(private http: HttpClient) { }

  getOcorrencias(id:string) {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/OcorrenciasAluno/`+id)
  }

}
