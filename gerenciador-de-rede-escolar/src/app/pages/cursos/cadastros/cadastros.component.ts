import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { CadastrosService } from './cadastros.service';

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
        
        let response = (await lastValueFrom(this.service.sendCurso(data)))
        console.log(response)


    }

}
