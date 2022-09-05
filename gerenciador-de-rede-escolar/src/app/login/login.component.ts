import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
// import { UserLogin } from '../model/UserLogin';
// import { AlertasService } from '../service/alertas.service';
// import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // userLogin: UserLogin = new UserLogin

  constructor(

    private router: Router,
    //private alerta: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  login(){
    this.router.navigate(['/'])
  }

}
