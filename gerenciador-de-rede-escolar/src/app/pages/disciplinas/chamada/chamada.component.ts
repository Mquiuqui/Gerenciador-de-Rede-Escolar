import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { DetalhesDisciplinaService } from '../detalhes-disciplina/detalhes-disciplina.service';
import { ChamadaService } from './chamada.service';

@Component({
  selector: 'app-chamada',
  templateUrl: './chamada.component.html',
  styleUrls: ['./chamada.component.css']
})
export class ChamadaComponent implements OnInit {


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
    private service: ChamadaService,
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

  async load() {
    this.routeActive.params.subscribe(async data => {
      this.idDisciplina = Number(data["id"])
      try {
        const result = (await lastValueFrom(this.service.getAlunos(data["id"]))).listaResultados
        this.listaAlunos = result

      } catch (error) {
        this.flashMessageService.show(error.message, 'error')
      }
    })

  }

  async salvarChamada(){

    this.listaAlunos.map(aluno => {
      let check = document.getElementById(`check+${aluno.id}`)
      console.log(check)
    })

    // let data = {
    //   idAluno: this.idAlunoSelecionado,
    //   idAtividade: this.atividadeSelecionada.id,
    //   idAcesso: this.AcessoId
    // }
    // try {
    //   const result = (await lastValueFrom(this.service.sendChamada(data))).listaResultados
    //   this.flashMessageService.show(result, 'success')
    // } catch (error) {
    //   this.flashMessageService.show(error.message, 'error')
    // }
  }



  

}
