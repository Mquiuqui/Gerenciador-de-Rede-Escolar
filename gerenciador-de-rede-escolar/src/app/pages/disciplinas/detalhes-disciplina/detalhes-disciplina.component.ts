import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { DetalhesDisciplinaService } from './detalhes-disciplina.service';

@Component({
  selector: 'app-detalhes-disciplina',
  templateUrl: './detalhes-disciplina.component.html',
  styleUrls: ['./detalhes-disciplina.component.css']
})
export class DetalhesDisciplinaComponent implements OnInit {

  @ViewChild('ModalNota', { static: false }) modal: ModalComponent
  @ViewChild('ModalOcorrencia', { static: false }) modalOcorrencia: ModalComponent

  rota: Router
  notaAluno: any[]
  listaAlunos: any[]
  listaAtividades: any[]
  AcessoId: number
  user: AccountService
  idDisciplina: number
  idAlunoSelecionado: number
  atividadeSelecionada: any = null

  constructor(
    private router: Router,
    private routeActive: ActivatedRoute,
    private service: DetalhesDisciplinaService,
    private auth: AccountService,
    private flashMessageService: FlashMessageService

  ) {
    this.rota = this.router
    this.user = this.auth
  }

  ngOnInit(): void {
    this.AcessoId = this.user.userValue.idAcesso ? this.user.userValue.idAcesso : this.user.userValue.codigoDepartamento2.idAcesso.id
    this.load()
    console.log(this.AcessoId)
  }

  setAluno(idAluno: number) {
    this.atividadeSelecionada = null
    this.idAlunoSelecionado = idAluno
    this.notaAluno = null
    this.modal.toggle()
  }
  setAlunoOcorrencia(idAluno: number) {
    this.atividadeSelecionada = null
    this.idAlunoSelecionado = idAluno
    this.notaAluno = null
    this.modalOcorrencia.toggle()
  }

  async setAtividade(idAtividade: string) {
    this.atividadeSelecionada = idAtividade
    let response = (await lastValueFrom(this.service.getNotas({ rgmAluno: this.idAlunoSelecionado, idAtividade }))).listaResultados
    console.log(response)
    this.notaAluno = response
  }

  async load() {
    this.routeActive.params.subscribe(async data => {
      this.idDisciplina = Number(data["id"])
      try {

        const result = (await lastValueFrom(this.service.getAlunos(data["id"]))).listaResultados
        this.listaAlunos = result
        const atividades = (await lastValueFrom(this.service.getAtividade(data["id"]))).listaResultados
        this.listaAtividades = atividades

      } catch (error) {
        this.flashMessageService.show(error.message, 'error')
      }
    })

  }

  async submit(evt: any) {
    let data
    if (this.notaAluno.length === 0) {
      data = {

        idDisciplina: this.idDisciplina,
        rgmAluno: this.idAlunoSelecionado,
        idAtividade: evt.target[0].value,
        nota: evt.target[1].value,

      }
    }
    if (this.notaAluno.length > 0) {
      data = {
        idDisciplina: this.idDisciplina,
        rgmAluno: this.idAlunoSelecionado,
        idAtividade: evt.target[0].value,
        nota: evt.target[1].value,
      }
    }

    let response = (await lastValueFrom(this.service.sendNota(data)))

    if (!response.flagErro) this.flashMessageService.show(response.listaMensagens[0], 'error');
    this.flashMessageService.show('Salvo com Sucesso', 'success');
    this.modal.toggle()
    this.rota.navigate(['detalhes-disciplina/', this.idDisciplina])


  }
  async submitOcorrencia(evt: any) {
    let data =
    {
      idProfessor: this.auth.userValue.professors[0].id,
      rgmAluno: this.idAlunoSelecionado,
      descricao: evt.target[0].value,
      data:evt.target[1].value

    }

    console.log(data)
    let response = (await lastValueFrom(this.service.sendOcorrencia(data)))

    if (!response.flagErro) this.flashMessageService.show(response.listaMensagens[0], 'error');
    this.flashMessageService.show('Salvo com Sucesso', 'success');
    this.modalOcorrencia.toggle()
    this.rota.navigate(['detalhes-disciplina/', this.idDisciplina])


  }

}
