import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CadastroUeComponent } from './cadastros/cadastro-ue/cadastro-ue.component';
import { CadastrosComponent } from './cadastros/cadastro-curso/cadastros.component';
import { VisualizarBoletosComponent } from './visualizar-boletos/visualizar-boletos.component';
import { EditUsuarioComponent } from './edit/edit-usuario/edit-usuario.component';
import { EditUnidadeEscolarComponent } from './edit/edit-unidade-escolar/edit-unidade-escolar.component';
import { VisualizarMatriculaComponent } from './matricula/visualizar-matricula/visualizar-matricula.component';
import { MelhoresAlunosComponent } from './melhores-alunos/melhores-alunos.component';
import { VisualizarPerfilComponent } from './visualizar-perfil/visualizar-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroUeComponent,
    CadastrosComponent,
    VisualizarBoletosComponent,
    EditUsuarioComponent,
    EditUnidadeEscolarComponent,
    VisualizarMatriculaComponent,
    MelhoresAlunosComponent,
    VisualizarPerfilComponent
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
