import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
import { CadastroClasseService } from './cadastro-classe.service';

@Component({
  selector: 'app-cadastro-classe',
  templateUrl: './cadastro-classe.component.html',
  styleUrls: ['./cadastro-classe.component.css']
})
export class CadastroClasseComponent implements OnInit {

  listaCursos: any[]
  rota: Router

  constructor(
    private route: Router,
    private service:CadastroClasseService,
    private flashMessageService: FlashMessageService
  ) { 
    this.rota = this.route
  }

  ngOnInit(): void {
    this.load()
  }

  async load() {
    this.listaCursos = (await lastValueFrom(this.service.getCursos())).listaResultados
  }

  async submit(evt: any) {

    let data = {

      descricaoClasse: evt.target[0].value,
      codigoCurso: evt.target[1].value,
      quantidadeAlunos: evt.target[2].value,
      quantidadeAlunosEspeciais: evt.target[3].value
    }

    let response = (await lastValueFrom(this.service.sendClasse(data)))

    if(!response.flagErro) this.flashMessageService.show(response.listaMensagens[0], 'error');
    this.flashMessageService.show('Salvo com Sucesso', 'success');
    this.rota.navigate(['/classe'])


  }
}
