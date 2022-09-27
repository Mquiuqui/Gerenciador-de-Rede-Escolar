import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { AppComponent } from './app.component';
import { CadastroUeComponent } from './cadastro-ue/cadastro-ue.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { VisualizarBoletosComponent } from './visualizar-boletos/visualizar-boletos.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'', component: LandingPageComponent},
  {path:'home', component: HomeComponent, canActivate:[AuthGuard]},


  {path:'cadastroUE', component: CadastroUeComponent, canActivate:[AuthGuard]},
  {path:'cadastros', component: CadastrosComponent, canActivate:[AuthGuard]},
  {path:'matricula', component: MatriculaComponent, canActivate:[AuthGuard]},
  {path:'vizualizarBoletos', component: VisualizarBoletosComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
