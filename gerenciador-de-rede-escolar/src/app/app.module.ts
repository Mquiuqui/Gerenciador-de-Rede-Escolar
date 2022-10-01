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
    CadastroFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
