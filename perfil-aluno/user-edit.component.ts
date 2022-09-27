import { environment } from 'src/environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User()
  idUser: number
  confirmarSenha: string
  tipoUsuario: string
  foto = environment.foto


  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){

    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value

  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  atualizar(){
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha) {
      alert('As senhas estão incorretas')

    } else {
      this.authService.alterar(this.user).subscribe((resp: User) => {
        this.user = resp
        console.log(this.user)
        this.router.navigate(['/inicio'])
        alert('Usuário atualizado com sucesso')
        environment.nome = ''
        environment.foto = ''
        environment.token = ''
        environment.id = 0
        this.router.navigate(['/inicio'])
      })
    }
  }

  findByIdUser(id: number){
    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp
    })
  }

}
