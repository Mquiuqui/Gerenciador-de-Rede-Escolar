import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
import { CadastrosService } from '../cadastros/cadastros.service';

@Component({
    selector: 'app-editar-cursos',
    templateUrl: './editar-cursos.component.html',
    styleUrls: ['./editar-cursos.component.css']
})
export class EditarCursosComponent implements OnInit {

    rota: Router
    periodos: any[]
    periodoSelected
    unidadeSelected
    unidades: any[]
    curso: any
    constructor(
        private rotaAtivada: ActivatedRoute,
        private route: Router,
        private service: CadastrosService,
        private flash: FlashMessageService
    ) {
        this.rota = this.route
    }

    ngOnInit(): void {
        this.load()
    }

    async load() {
        this.rotaAtivada.params.subscribe(async data => {
            let response = (await lastValueFrom(this.service.getCurso(data['id'])))
            if (response.flagErro) {
                this.flash.show(response.listaMensagens[0], 'error')
                return
            }
            this.curso = response.listaResultados
        })
        this.periodos = (await lastValueFrom(this.service.getPeriodo())).listaResultados
        this.periodoSelected = this.periodos.find(periodo => periodo.id == this.curso.idTurno).id
        this.unidades = (await lastValueFrom(this.service.getUnidades())).listaResultados
        this.unidadeSelected = this.unidades.find(unidade => unidade.id == this.curso.idEscola).id
        console.log(this.unidadeSelected, this.periodoSelected)
    }

    async submit(evt: any) {
        console.log('teste')

        let data = {

            nomeCurso: evt.target[0].value,
            idTurno: evt.target[1].value,
            idEscola: evt.target[2].value
        }
        try {
            let response = (await lastValueFrom(this.service.sendCurso(data)))
            if (response.flagErro) {
                this.flash.show(response.listaMensagens[0], 'error')
                return
            }
            this.rota.navigate(['cursos'])

        } catch (error) {
            this.flash.show(error.error.listaMensagens[0], 'error')
        }


    }


}
