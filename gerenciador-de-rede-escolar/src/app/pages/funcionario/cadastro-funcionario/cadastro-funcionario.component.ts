import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  cargo:string = ''
  rota:Router
  constructor(
    private router:Router
  ) { 
    this.rota = this.router
  }

  changeCargo(cargoNovo:string){
    this.cargo = cargoNovo
  }

  ngOnInit(): void {
  }

}
