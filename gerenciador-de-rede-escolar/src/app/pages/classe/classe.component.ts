import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ClasseService } from './classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  rota: Router
  listaClasse: any[]
  constructor(
    private router: Router,
    private service: ClasseService
  ) {
    this.rota = this.router
  }

  ngOnInit(): void {
    this.cursos()
    }

async cursos(){
    let response = (await lastValueFrom(this.service.getClasses())).listaResultados
    this.listaClasse = response
}


}
