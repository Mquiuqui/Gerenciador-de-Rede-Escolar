import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient) { }

  getNotas(id:string) {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/NotasAluno/`+id)
  }

}
