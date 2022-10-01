import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro-ue',
    templateUrl: './cadastro-ue.component.html',
    styleUrls: ['./cadastro-ue.component.css']
})
export class CadastroUeComponent implements OnInit {

    rota: Router
    constructor(

        private router: Router

    ) {

        this.rota = this.router
        
    }

    ngOnInit(): void {
    }

}
