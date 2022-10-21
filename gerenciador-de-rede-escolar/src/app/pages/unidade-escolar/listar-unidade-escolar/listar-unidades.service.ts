import { Observable } from 'rxjs';
import { IApiReturn } from './../../../../types/IApiReturn.d';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnidadeEscolar } from 'src/app/model/UnidadeEscolar';

@Injectable({
  providedIn: 'root'
})
export class ListarUnidadesService {

  constructor(
    private http: HttpClient
  ) { }


  getUnidades(){
    return this.http.get<IApiReturn<UnidadeEscolar[]>>(`http://localhost:3333/Unidades`)
  }


}
