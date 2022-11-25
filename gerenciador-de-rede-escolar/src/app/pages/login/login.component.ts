import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
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
    private flashMessageService: FlashMessageService
    //private alerta: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  async submit() {

    if (this.user.username === '' || this.user.senha === '') {
      this.flashMessageService.show('Preencha todos os campos', 'error');
      return
    }
    const user = await this.accountService.login(this.user.username, this.user.senha)
    if (user.flagErro) this.flashMessageService.show(user.listaMensagens[0], 'error');
    if(!user.flagErro) this.router.navigate(['home'])
    
    
}
  async submitFuncionario() {

    const user = await this.accountService.loginFuncionario(this.user.username, this.user.senha)
    if (user.flagErro) this.flashMessageService.show(user.listaMensagens[0], 'error');
    if(!user.flagErro) this.router.navigate(['home'])
    
    
}

}
