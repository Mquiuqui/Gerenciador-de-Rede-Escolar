import { VisualizarMatriculaComponent } from './matricula/visualizar-matricula/visualizar-matricula.component';
import { MatriculaComponent } from './matricula/matricula-envio/matricula.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { AppComponent } from './app.component';
import { CadastroUeComponent } from './cadastros/cadastro-ue/cadastro-ue.component';
import { CadastrosComponent } from './cadastros/cadastro-curso/cadastros.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VisualizarBoletosComponent } from './visualizar-boletos/visualizar-boletos.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent, canActivate:[AuthGuard]},


  {path:'cadastroUE', component: CadastroUeComponent, canActivate:[AuthGuard]},
  {path:'cadastros', component: CadastrosComponent, canActivate:[AuthGuard]},
  {path:'matricula', component: MatriculaComponent, canActivate:[AuthGuard]},
  {path:'visualizar-matricula', component: VisualizarMatriculaComponent, canActivate:[AuthGuard]},
  {path:'vizualizarBoletos', component: VisualizarBoletosComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
