import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
import { FuncionarioService } from '../funcionario.service';
import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'app-editar-funcionario',
    templateUrl: './editar-funcionario.component.html',
    styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {


    cargo: string = ''
    rota: Router
    listaDepartamentos: any[]
    listaCursos: any[]
    flagProfessor: boolean
    AcessoId: number
    funcionario: any
    departamentoSelecionado
    cursoSelecionado

    constructor(
        private rotaAtiva: ActivatedRoute,
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
        this.rotaAtiva.params.subscribe(async data => {
            let response = (await lastValueFrom(this.service.getFunc(data['id'])))
            this.funcionario = response.listaResultados
            console.log(response)
            this.departamentoSelecionado = response.listaResultados.codigoDepartamento
            this.flagProfessor = this.funcionario.professors.length > 0 ? true : false
            if(this.flagProfessor){
                this.cursoSelecionado = response.listaResultados.professors[0].codigoCurso
            }
            console.log(this.departamentoSelecionado ,this.cursoSelecionado)
        })
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
                flagProfessor: true

            }
        } if (!this.flagProfessor) {
            data = {

                nomeFuncionario: evt.target[1].value,
                email: evt.target[2].value,
                senha: evt.target[3].value,
                cargo: evt.target[4].value,
                salario: evt.target[5].value,
                codigoDepartamento: evt.target[6].value,
                flagProfessor: false

            }
        }
        console.log(data)
        let response = (await lastValueFrom(this.service.sendFuncionario(data)))

        if (!response.flagErro) this.flashMessageService.show(response.listaMensagens[0], 'error');
        this.flashMessageService.show('Salvo com Sucesso', 'success');
        this.rota.navigate(['/listar_funcionario'])


    }

}
