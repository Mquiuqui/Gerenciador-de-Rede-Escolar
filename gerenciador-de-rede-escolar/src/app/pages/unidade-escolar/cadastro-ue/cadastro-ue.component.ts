import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FlashMessageComponent } from 'src/app/components/flash-message/flash-message.component';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
import { CadastroUeService } from './cadastro-ue.service';

@Component({
    selector: 'app-cadastro-ue',
    templateUrl: './cadastro-ue.component.html',
    styleUrls: ['./cadastro-ue.component.css']
})
export class CadastroUeComponent implements OnInit {

    rota: Router
    constructor(

        private router: Router,
        private service: CadastroUeService,
        private flash: FlashMessageService

    ) {

        this.rota = this.router

    }

    ngOnInit(): void {
    }

    async submit(evt: any) {
        console.log('teste')

        let data = {

            nomeEscola: evt.target[0].value,
            endereco: evt.target[1].value,
            nroEndereco: evt.target[2].value,

        }

        
        try {
            let response = (await lastValueFrom(this.service.sendUE(data)))

            if (!response.flagErro) {
                this.rota.navigate(['/home'])
            }
        } catch (error) {
            console.log(error)
            this.flash.show(error.error.listaMensagens[0], 'error')
        }


    }

}
