import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ano-letivo',
  templateUrl: './ano-letivo.component.html',
  styleUrls: ['./ano-letivo.component.css']
})
export class AnoLetivoComponent implements OnInit {

  rota:Router
  constructor(
    private router:Router
  ) { 
    this.rota = this.router
  }

  ngOnInit(): void {
  }

}
