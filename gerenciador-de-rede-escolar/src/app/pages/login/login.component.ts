import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/auth/auth.account.service';
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

  user: { username: string, senha: string } = { username: '', senha: '' }
  typeInput: 'password' | 'text' = 'password'

  constructor(
    private accountService: AccountService,
    private router: Router,
    //private alerta: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  async submit() {

    if (!this.user.username || !this.user.senha) console.log("teste")

    const user = await this.accountService.login(this.user.username, this.user.senha)
    if (!user) console.log("Usuário não encontrado ou não registrado", 'error');
    else {
      this.router.navigate(['home'])
    }
}

}
