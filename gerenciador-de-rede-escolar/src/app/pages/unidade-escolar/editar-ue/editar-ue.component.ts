import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
import { CadastroUeService } from '../cadastro-ue/cadastro-ue.service';
import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'app-editar-ue',
    templateUrl: './editar-ue.component.html',
    styleUrls: ['./editar-ue.component.css']
})
export class EditarUeComponent implements OnInit {
    rota: Router
    ue: any
    constructor(
        private rotaAtiva: ActivatedRoute,
        private router: Router,
        private service: CadastroUeService,
        private flash: FlashMessageService

    ) {

        this.rota = this.router

    }

    ngOnInit(): void {
        this.load()
        console.log(this.ue)
    }

    load() {
        this.rotaAtiva.params.subscribe(async data => {
            let response = await lastValueFrom(this.service.getUeById(data['id']))
            this.ue = response.listaResultados
  
        })
    }

    async submit(evt: any) {
        console.log('teste')

        let data = {
            id: this.ue.id,
            nomeEscola: evt.target[0].value,
            endereco: evt.target[1].value,
            nroEndereco: evt.target[2].value,

        }

        console.log(data)

        try {
            let response = (await lastValueFrom(this.service.updateUnidadeEscolar(data)))

            if (!response.flagErro) {
                this.flash.show('Unidade Escolar alterada com sucesso', 'success')
                this.rota.navigate(['/unidade_escolar'])
            }
        } catch (error) {
            console.log(error)
            this.flash.show(error.error.listaMensagens[0], 'error')
        }


    }


}
