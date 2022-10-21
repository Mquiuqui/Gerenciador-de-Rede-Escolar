import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
import { CadastroDisciplinasService } from './cadastro-disciplinas.service';

@Component({
  selector: 'app-cadastro-disciplinas',
  templateUrl: './cadastro-disciplinas.component.html',
  styleUrls: ['./cadastro-disciplinas.component.css']
})
export class CadastroDisciplinasComponent implements OnInit {

  cargo: string = ''
  rota: Router
  listaDepartamentos: any[]
  listaCursos: any[]
  listaProfessores: any[]
  listaClasse:any[]

  constructor(
    private router: Router,
    private service: CadastroDisciplinasService,
    private flashMessageService: FlashMessageService
  ) {
    this.rota = this.router
  }
  ngOnInit(): void {
    this.load()
  }

  async load(){
    let cursos = (await lastValueFrom(this.service.getCursos())).listaResultados
    this.listaCursos = cursos
  }

  async classes(id:any){
    console.log(id)
    let classes = (await lastValueFrom(this.service.getClasses(id))).listaResultados
    this.listaClasse = classes
    let professores = (await lastValueFrom(this.service.getProfessores())).listaResultados
    this.listaProfessores = professores
  }

  async submit(evt: any) {
    let data = {

      nomeDisciplina: evt.target[0].value,
      codigoCurso: evt.target[1].value,
      codigoClasse: evt.target[2].value,
      idProfessor: evt.target[3].value,


      }

    console.log(data)
    let response = (await lastValueFrom(this.service.sendDisciplina(data)))

    if(response.flagErro){
      this.flashMessageService.show(response.listaMensagens[0], 'error');
      return  
    } 
    this.flashMessageService.show('Salvo com Sucesso', 'success');
    this.rota.navigate(['/listar_disciplinas'])


  }
}
