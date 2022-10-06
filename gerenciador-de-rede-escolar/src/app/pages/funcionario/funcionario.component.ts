import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ClasseService } from '../classe/classe.service';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  rota: Router
  listaFuncionarios: any[]
  listaDepartamento: any[]
  constructor(
    private router: Router,
    private service: FuncionarioService
  ) {
    this.rota = this.router
  }


  ngOnInit(): void {
    this.funcionarios()
  }

  async funcionarios() {
    let response = (await lastValueFrom(this.service.getFuncionario())).listaResultados
    console.log(response)
    this.listaFuncionarios = response
  }

}
