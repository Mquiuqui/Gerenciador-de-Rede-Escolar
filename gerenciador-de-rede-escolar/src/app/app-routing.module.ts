import { ContatoComponent } from './contato/contato.component';
import { ListarUnidadeEscolarComponent } from './pages/unidade-escolar/listar-unidade-escolar/listar-unidade-escolar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { AppComponent } from './app.component';
import { AnoLetivoComponent } from './pages/ano-letivo/ano-letivo.component';
import { CadastroAnoLetivoComponent } from './pages/ano-letivo/cadastro-ano-letivo/cadastro-ano-letivo.component';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { CadastroClasseComponent } from './pages/classe/cadastro-classe/cadastro-classe.component';

import { ClasseComponent } from './pages/classe/classe.component';
import { CadastrosComponent } from './pages/cursos/cadastros/cadastros.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CadastroDisciplinasComponent } from './pages/disciplinas/cadastro-disciplinas/cadastro-disciplinas.component';
import { DetalhesDisciplinaComponent } from './pages/disciplinas/detalhes-disciplina/detalhes-disciplina.component';
import { DisciplinasComponent } from './pages/disciplinas/disciplinas.component';
import { CadastroFuncionarioComponent } from './pages/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ListarMatriculasComponent } from './pages/matricula/listar-matriculas/listar-matriculas.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';
import { VisualizarMatriculaComponent } from './pages/matricula/visualizar-matricula/visualizar-matricula.component';
import { NotasComponent } from './pages/notas/notas.component';
import { OcorrenciasComponent } from './pages/ocorrencias/ocorrencias.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CadastroUeComponent } from './pages/unidade-escolar/cadastro-ue/cadastro-ue.component';
import { UnidadeEscolarComponent } from './pages/unidade-escolar/unidade-escolar.component';
import { VisualizarBoletosComponent } from './pages/visualizar-boletos/visualizar-boletos.component';
import { ChamadaComponent } from './pages/disciplinas/chamada/chamada.component';
import { ListarChamadaComponent } from './pages/disciplinas/chamada/listar-chamada/listar-chamada.component';
import { EditarUeComponent } from './pages/unidade-escolar/editar-ue/editar-ue.component';
import { EditarCursosComponent } from './pages/cursos/editar-cursos/editar-cursos.component';
import { EditarClasseComponent } from './pages/classe/editar-classe/editar-classe.component';
import { EditarFuncionarioComponent } from './pages/funcionario/editar-funcionario/editar-funcionario.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'', component: LandingPageComponent},

  {path:'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path:'contato', component: ContatoComponent},
  {path:'perfil_editar', component: PerfilComponent, canActivate:[AuthGuard]},

  {path:'matricula', component: MatriculaComponent},
  {path:'listar_matriculas', component: ListarMatriculasComponent, canActivate:[AuthGuard]},
  {path:'visualizar_matricula/:id', component: VisualizarMatriculaComponent, canActivate:[AuthGuard]},

  {path:'unidade_escolar', component: UnidadeEscolarComponent, canActivate:[AuthGuard]},
  {path:'cadastroUE', component: CadastroUeComponent, canActivate:[AuthGuard]},
  {path: 'listar_unidades', component: ListarUnidadeEscolarComponent, canActivate:[AuthGuard]},
  {path: 'editar-ue/:id', component: EditarUeComponent, canActivate:[AuthGuard]},

  {path:'ano_letivo', component: AnoLetivoComponent, canActivate:[AuthGuard]},
  {path:'cadastro_ano_letivo', component: CadastroAnoLetivoComponent, canActivate:[AuthGuard]},

  {path:'cursos', component: CursosComponent, canActivate:[AuthGuard]},
  {path:'cadastro_curso', component: CadastrosComponent, canActivate:[AuthGuard]},
  {path:'editar_curso/:id', component: EditarCursosComponent, canActivate:[AuthGuard]},

  {path:'classe', component: ClasseComponent, canActivate:[AuthGuard]},
  {path:'cadastro_classe', component: CadastroClasseComponent, canActivate:[AuthGuard]},
  {path:'editar_classe/:id', component: EditarClasseComponent, canActivate:[AuthGuard]},

  {path:'vizualizar_boletos', component: VisualizarBoletosComponent, canActivate:[AuthGuard]},

  {path:'listar_ocorrencia', component: OcorrenciasComponent, canActivate:[AuthGuard]},
  {path:'listar_notas', component: NotasComponent, canActivate:[AuthGuard]},

  {path:'listar_atividades/:id', component: AtividadesComponent, canActivate:[AuthGuard]},

  {path:'listar_disciplinas', component: DisciplinasComponent, canActivate:[AuthGuard]},
  {path:'cadastro_disciplinas', component: CadastroDisciplinasComponent, canActivate:[AuthGuard]},
  {path:'detalhe_disciplinas/:id', component: DetalhesDisciplinaComponent, canActivate:[AuthGuard]},
  {path:'chamada/:id', component: ChamadaComponent, canActivate:[AuthGuard]},
  {path:'listar-chamadas', component: ListarChamadaComponent, canActivate:[AuthGuard]},

  {path:'listar_funcionario', component: FuncionarioComponent, canActivate:[AuthGuard]},
  {path:'cadastro_funcionario', component: CadastroFuncionarioComponent, canActivate:[AuthGuard]},
  {path:'editar_funcionario/:id', component: EditarFuncionarioComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
