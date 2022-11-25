import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
import { CadastroClasseService } from '../cadastro-classe/cadastro-classe.service';
@Component({
  selector: 'app-editar-classe',
  templateUrl: './editar-classe.component.html',
  styleUrls: ['./editar-classe.component.css']
})
export class EditarClasseComponent implements OnInit {

  classe: any
  listaCursos: any[]
  cursoSelecionado: any
  rota: Router

  constructor(
    private rotaAtivada: ActivatedRoute,
    private route: Router,
    private service: CadastroClasseService,
    private flashMessageService: FlashMessageService
  ) {
    this.rota = this.route
  }

  ngOnInit(): void {
    this.load()
  }

  async load() {
    this.rotaAtivada.params.subscribe(async data => {
      let response = (await lastValueFrom(this.service.getClasse(data['id'])))
      if (response.flagErro) {
        this.flashMessageService.show(response.listaMensagens[0], 'error')
        return
      }
      this.classe = response.listaResultados
      console.log(this.classe)
      this.listaCursos = (await lastValueFrom(this.service.getCursos())).listaResultados
      this.cursoSelecionado = this.listaCursos.find(curso => curso.id == this.classe.codigoCurso).id
      console.log(this.cursoSelecionado)
    })

  }

  async submit(evt: any) {

    let data = {
      id: this.classe.id,
      descricaoClasse: evt.target[0].value,
      codigoCurso: evt.target[1].value,
      quantidadeAlunos: evt.target[2].value,
      quantidadeAlunosEspeciais: evt.target[3].value
    }

    try {
      let response = (await lastValueFrom(this.service.updateClasse(data)))
      if (response.flagErro) {
        this.flashMessageService.show(response.listaMensagens[0], 'error');
        return
      }
      this.flashMessageService.show('Salvo com Sucesso', 'success');
      this.rota.navigate(['/classe'])

    } catch (error) {
      this.flashMessageService.show(error.error.listaMensagens[0], 'error')
    }

  }

}
