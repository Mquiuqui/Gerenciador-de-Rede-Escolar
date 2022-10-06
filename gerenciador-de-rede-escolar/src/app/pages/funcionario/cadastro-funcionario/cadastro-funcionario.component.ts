import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
import { ListarMatriculasService } from '../../matricula/listar-matriculas/listar-matriculas.service';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  cargo: string = ''
  rota: Router
  listaDepartamentos: any[]
  listaCursos: any[]
  flagProfessor: boolean
  AcessoId:number

  constructor(
    private router: Router,
    private service: FuncionarioService,
    private flashMessageService: FlashMessageService
  ) {
    this.rota = this.router
  }

  changeCargo(cargoNovo: string) {
    this.cargo = cargoNovo
  }

  ngOnInit(): void {
    this.departamento()
  }

  async departamento() {
    let response = (await lastValueFrom(this.service.getDepartamento())).listaResultados
    this.listaDepartamentos = response
    let cursos = (await lastValueFrom(this.service.getCursos())).listaResultados
    this.listaCursos = cursos
  }

  async submit(evt: any) {
    let data
    if (this.flagProfessor) {
      data = {

        nomeFuncionario: evt.target[1].value,
        email: evt.target[2].value,
        senha: evt.target[3].value,
        cargo: evt.target[4].value,
        salario: evt.target[5].value,
        codigoCurso: evt.target[6].value,
        flagProfessor:true

      }
    }if(!this.flagProfessor){
      data = {

        nomeFuncionario: evt.target[1].value,
        email: evt.target[2].value,
        senha: evt.target[3].value,
        cargo: evt.target[4].value,
        salario: evt.target[5].value,
        codigoDepartamento: evt.target[6].value,
        flagProfessor:false

      }
    }
    console.log(data)
    let response = (await lastValueFrom(this.service.sendFuncionario(data)))

    if(!response.flagErro) this.flashMessageService.show(response.listaMensagens[0], 'error');
    this.flashMessageService.show('Salvo com Sucesso', 'success');
    this.rota.navigate(['/listar_funcionario'])


  }

}
