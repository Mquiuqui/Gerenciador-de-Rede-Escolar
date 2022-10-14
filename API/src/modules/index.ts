import { Ocorrencia } from '../entity/Ocorrencia'
import { UnidadeController } from './Acesso/UnidadeController'
import { UserController } from './Acesso/UserController'
import { AtividadeController } from './Atividades/AtividadeController'
import { ClasseController } from './Classes/ClasseController'
import { CursoController } from './Cursos/CursosController'
import { DisciplinaController } from './Disciplina/DisciplinaController'
import { FuncionarioController } from './Funcionario/FuncionarioController'
import { OcorrenciaController } from './Ocorrencias/OcorrenciasController'


export const controllers = [
    UserController,
    CursoController,
    ClasseController,
    UnidadeController,
    FuncionarioController,
    DisciplinaController,
    AtividadeController,
    OcorrenciaController

]
