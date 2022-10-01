import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-ano-letivo',
  templateUrl: './cadastro-ano-letivo.component.html',
  styleUrls: ['./cadastro-ano-letivo.component.css']
})
export class CadastroAnoLetivoComponent implements OnInit {

  rota:Router
  constructor(
    private router:Router
  ) { 
    this.rota = this.router
  }
  ngOnInit(): void {
  }

}
