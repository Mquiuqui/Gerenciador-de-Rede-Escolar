import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { CadastrosService } from './cadastros.service';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';

@Component({
    selector: 'app-cadastros',
    templateUrl: './cadastros.component.html',
    styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {

    rota: Router
    periodos:any[]
    unidades:any[]
    constructor(
        private route: Router,
        private service: CadastrosService,
        private flash: FlashMessageService
    ) {
        this.rota = this.route
    }

    ngOnInit(): void {
        this.load()
    }

    async load(){
        this.periodos = (await lastValueFrom(this.service.getPeriodo())).listaResultados
        this.unidades = (await lastValueFrom(this.service.getUnidades())).listaResultados
    }

    async submit(evt:any){   
        console.log('teste')

        let data = {
            
            nomeCurso:evt.target[0].value,
            idTurno:evt.target[1].value,
            idEscola:evt.target[2].value
        }
        try{
            let response = (await lastValueFrom(this.service.sendCurso(data)))
            if(response.flagErro) {
                this.flash.show(response.listaMensagens[0], 'error')
                return
            }
            this.rota.navigate(['cursos'])

        }catch(error){
            this.flash.show(error.error.listaMensagens[0], 'error')
        }


    }

}
