import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  rota: Router
  constructor(
    private router: Router
  ) {
    this.rota = this.router
  }
  ngOnInit(): void {
  }

}
