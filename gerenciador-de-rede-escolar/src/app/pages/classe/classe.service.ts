import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiReturn } from 'src/types/IApiReturn';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http: HttpClient) { }

  getClasses() {
      return this.http.get<IApiReturn<any>>(`http://localhost:3333/Classes`)
  }
  deleteClasse(id) {
    return this.http.get<IApiReturn<any>>(`http://localhost:3333/Classes/delete/${id}`)
}


}
