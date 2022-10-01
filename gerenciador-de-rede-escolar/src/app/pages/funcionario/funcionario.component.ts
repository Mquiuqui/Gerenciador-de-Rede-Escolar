import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  rota:Router
  constructor(
    private router:Router
  ) { 
    this.rota = this.router
  }


  ngOnInit(): void {
  }

}
