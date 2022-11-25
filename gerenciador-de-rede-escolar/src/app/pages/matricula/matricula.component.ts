import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
import { MatriculaService } from './matricula.service';

@Component({
    selector: 'app-matricula',
    templateUrl: './matricula.component.html',
    styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

    rota: Router
    listaCursos: any[] = []
    constructor(
        private route: Router,
        private service: MatriculaService,
        private flash: FlashMessageService,
    ) {
        this.rota = this.route
    }

    ngOnInit(): void {
        this.cursos()
    }

    async cursos() {
        let response = (await lastValueFrom(this.service.getCursos())).listaResultados
        this.listaCursos = response
    }

    async submit(evt: any) {
        console.log('teste')

        let data = {

            nomeAluno: evt.target[0].value,
            dtNasc: evt.target[1].value,
            emailAluno: evt.target[2].value,
            telefone: evt.target[3].value,
            codigoCurso: evt.target[9].value,
            sexoAluno: evt.target[8].value,
            endereco: evt.target[6].value,
            senhaAluno: evt.target[13].value,
            rgAluno: evt.target[4].value,
            cpfAluno: evt.target[5].value,
        }

        try {
            let response = (await lastValueFrom(this.service.sendMatricula(data)))
            if (response.flagErro) {
                alert(response.listaMensagens[0])
                return
            }
            alert('Matricula Enviada com Sucesso!')
            this.rota.navigate(['/home'])


        } catch (error) {

            alert(error.error.listaMensagens[0])
        }





    }

}
