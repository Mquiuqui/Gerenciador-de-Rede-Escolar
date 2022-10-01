import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-matriculas',
  templateUrl: './listar-matriculas.component.html',
  styleUrls: ['./listar-matriculas.component.css']
})
export class ListarMatriculasComponent implements OnInit {

  rota: Router
  constructor(
    private router: Router
  ) {
    this.rota = this.router
  }
  ngOnInit(): void {
  }

}
