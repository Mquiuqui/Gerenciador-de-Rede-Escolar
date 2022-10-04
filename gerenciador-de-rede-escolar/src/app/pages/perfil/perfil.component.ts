import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/auth/auth.account.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  rota: Router
  user: AccountService
  listaCursos:any[] = []
  constructor(
      private route: Router,
      private auth: AccountService
      //private service: MatriculaService
  ) {
      this.rota = this.route
      this.user = this.auth
  }


  ngOnInit(): void {
  }

}
