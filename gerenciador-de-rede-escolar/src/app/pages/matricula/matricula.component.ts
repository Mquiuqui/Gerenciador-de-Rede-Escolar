import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-matricula',
    templateUrl: './matricula.component.html',
    styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

    rota: Router
    constructor(
        private route: Router
    ) {
        this.rota = this.route
    }

    ngOnInit(): void {
    }

}
