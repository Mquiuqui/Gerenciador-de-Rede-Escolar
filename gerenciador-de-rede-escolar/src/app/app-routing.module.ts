import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { AppComponent } from './app.component';
import { AnoLetivoComponent } from './pages/ano-letivo/ano-letivo.component';
import { CadastroAnoLetivoComponent } from './pages/ano-letivo/cadastro-ano-letivo/cadastro-ano-letivo.component';
import { CadastroClasseComponent } from './pages/classe/cadastro-classe/cadastro-classe.component';

import { ClasseComponent } from './pages/classe/classe.component';
import { CadastrosComponent } from './pages/cursos/cadastros/cadastros.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CadastroDisciplinasComponent } from './pages/disciplinas/cadastro-disciplinas/cadastro-disciplinas.component';
import { DisciplinasComponent } from './pages/disciplinas/disciplinas.component';
import { CadastroFuncionarioComponent } from './pages/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ListarMatriculasComponent } from './pages/matricula/listar-matriculas/listar-matriculas.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';
import { VisualizarMatriculaComponent } from './pages/matricula/visualizar-matricula/visualizar-matricula.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CadastroUeComponent } from './pages/unidade-escolar/cadastro-ue/cadastro-ue.component';
import { UnidadeEscolarComponent } from './pages/unidade-escolar/unidade-escolar.component';
import { VisualizarBoletosComponent } from './pages/visualizar-boletos/visualizar-boletos.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'', component: LandingPageComponent},
  
  {path:'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path:'perfil_editar', component: PerfilComponent, canActivate:[AuthGuard]},
  
  {path:'matricula', component: MatriculaComponent},
  {path:'listar_matriculas', component: ListarMatriculasComponent, canActivate:[AuthGuard]},
  {path:'visualizar_matricula/:id', component: VisualizarMatriculaComponent, canActivate:[AuthGuard]},
  
  {path:'unidade_escolar', component: UnidadeEscolarComponent, canActivate:[AuthGuard]},
  {path:'cadastroUE', component: CadastroUeComponent, canActivate:[AuthGuard]},
 
  {path:'ano_letivo', component: AnoLetivoComponent, canActivate:[AuthGuard]},
  {path:'cadastro_ano_letivo', component: CadastroAnoLetivoComponent, canActivate:[AuthGuard]},

  {path:'cursos', component: CursosComponent, canActivate:[AuthGuard]},
  {path:'cadastro_curso', component: CadastrosComponent, canActivate:[AuthGuard]},
  
  {path:'classe', component: ClasseComponent, canActivate:[AuthGuard]},
  {path:'cadastro_classe', component: CadastroClasseComponent, canActivate:[AuthGuard]},
  
  {path:'vizualizar_boletos', component: VisualizarBoletosComponent, canActivate:[AuthGuard]},

  {path:'listar_disciplinas', component: DisciplinasComponent, canActivate:[AuthGuard]},
  {path:'cadastro_disciplinas', component: CadastroDisciplinasComponent, canActivate:[AuthGuard]},
  
  {path:'listar_funcionario', component: FuncionarioComponent, canActivate:[AuthGuard]},
  {path:'cadastro_funcionario', component: CadastroFuncionarioComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
