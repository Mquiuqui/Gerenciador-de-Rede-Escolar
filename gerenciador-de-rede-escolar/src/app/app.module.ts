import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ClasseComponent } from './pages/classe/classe.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroUeComponent } from './pages/unidade-escolar/cadastro-ue/cadastro-ue.component';
import { CadastrosComponent } from './pages/cursos/cadastros/cadastros.component';
import { MatriculaComponent } from './pages/matricula/matricula.component';
import { VisualizarBoletosComponent } from './pages/visualizar-boletos/visualizar-boletos.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AnoLetivoComponent } from './pages/ano-letivo/ano-letivo.component';
import { UnidadeEscolarComponent } from './pages/unidade-escolar/unidade-escolar.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CadastroAnoLetivoComponent } from './pages/ano-letivo/cadastro-ano-letivo/cadastro-ano-letivo.component';
import { VisualizarMatriculaComponent } from './pages/matricula/visualizar-matricula/visualizar-matricula.component';
import { ListarMatriculasComponent } from './pages/matricula/listar-matriculas/listar-matriculas.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { CadastroFuncionarioComponent } from './pages/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { FlashMessageComponent } from './components/flash-message/flash-message.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CadastroClasseComponent } from './pages/classe/cadastro-classe/cadastro-classe.component';
import { DisciplinasComponent } from './pages/disciplinas/disciplinas.component';
import { CadastroDisciplinasComponent } from './pages/disciplinas/cadastro-disciplinas/cadastro-disciplinas.component';
import { DetalhesDisciplinaComponent } from './pages/disciplinas/detalhes-disciplina/detalhes-disciplina.component';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { CadastrarAtividadeComponent } from './pages/atividades/cadastrar-atividade/cadastrar-atividade.component';
import { NotasComponent } from './pages/notas/notas.component';
import { OcorrenciasComponent } from './pages/ocorrencias/ocorrencias.component';
import { ChamadasComponent } from './pages/chamadas/chamadas.component';
import { ModalModule } from './components/modal/modal.modules';
import { ListarUnidadeEscolarComponent } from './pages/unidade-escolar/listar-unidade-escolar/listar-unidade-escolar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroUeComponent,
    CadastrosComponent,
    MatriculaComponent,
    VisualizarBoletosComponent,
    LandingPageComponent,
    AnoLetivoComponent,
    UnidadeEscolarComponent,
    CursosComponent,
    CadastroAnoLetivoComponent,
    ClasseComponent,
    VisualizarMatriculaComponent,
    ListarMatriculasComponent,
    FuncionarioComponent,
    CadastroFuncionarioComponent,
    FlashMessageComponent,
    PerfilComponent,
    CadastroClasseComponent,
    DisciplinasComponent,
    CadastroDisciplinasComponent,
    DetalhesDisciplinaComponent,
    AtividadesComponent,
    CadastrarAtividadeComponent,
    NotasComponent,
    OcorrenciasComponent,
    ChamadasComponent,
    ListarUnidadeEscolarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
