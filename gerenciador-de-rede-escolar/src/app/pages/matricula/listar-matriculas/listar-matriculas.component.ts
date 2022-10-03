import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ListarMatriculasService } from './listar-matriculas.service';

@Component({
  selector: 'app-listar-matriculas',
  templateUrl: './listar-matriculas.component.html',
  styleUrls: ['./listar-matriculas.component.css']
})
export class ListarMatriculasComponent implements OnInit {

  rota: Router
  listaMatriculas: any[] =[]
  constructor(
    private router: Router,
    private service: ListarMatriculasService
  ) {
    this.rota = this.router
  }
    ngOnInit(): void {
        this.cursos()
    }

    async cursos(){
        let response = (await lastValueFrom(this.service.getMatriculas())).listaResultados
        this.listaMatriculas = response
    }

    async aprovar(id:string){
      let response = (await lastValueFrom(this.service.aprovar(id))).listaResultados
      this.listaMatriculas = response
  }

}
