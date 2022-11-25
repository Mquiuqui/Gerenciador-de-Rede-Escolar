import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
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
    private service: ClasseService,
    private flashMessageService: FlashMessageService
  ) {
    this.rota = this.router
  }

  ngOnInit(): void {
    this.cursos()
  }

  async cursos() {
    let response = (await lastValueFrom(this.service.getClasses())).listaResultados
    this.listaClasse = response
  }

  async deleteClasse(id: number) {
    let response = (await lastValueFrom(this.service.deleteClasse(id)))
    if(response.flagErro){
        this.flashMessageService.show("A Classe possui Disciplinas Ativos", 'error')
        return
    }
    this.cursos()
  }

}
