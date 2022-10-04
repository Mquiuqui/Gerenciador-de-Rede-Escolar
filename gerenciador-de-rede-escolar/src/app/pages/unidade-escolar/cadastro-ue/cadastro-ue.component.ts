import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
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
        private service: CadastroUeService

    ) {

        this.rota = this.router
        
    }

    ngOnInit(): void {
    }

    async submit(evt:any){   
        console.log('teste')

        let data = {
            
            nomeEscola:evt.target[0].value,
            endereco:evt.target[1].value,
            nroEndereco:evt.target[2].value,
            
        }
        
        let response = (await lastValueFrom(this.service.sendUE(data)))
       
        if(!response.flagErro){
            this.rota.navigate(['/home'])
        }


    }

}
