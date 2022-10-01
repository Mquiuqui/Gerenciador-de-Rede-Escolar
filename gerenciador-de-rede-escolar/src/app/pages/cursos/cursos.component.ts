import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  rota:Router
  constructor(
    private router:Router
  ) { 
    this.rota = this.router
  }


  ngOnInit(): void {
  }

}
