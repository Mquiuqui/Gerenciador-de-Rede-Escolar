import { Ocorrencia } from '../entity/Ocorrencia'
import { UnidadeController } from './Acesso/UnidadeController'
import { UserController } from './Acesso/UserController'
import { AtividadeController } from './Atividades/AtividadeController'
import { ChamadaController } from './Chamada/ChamadaController'
import { ClasseController } from './Classes/ClasseController'
import { CursoController } from './Cursos/CursosController'
import { DisciplinaController } from './Disciplina/DisciplinaController'
import { FuncionarioController } from './Funcionario/FuncionarioController'
import { OcorrenciaController } from './Ocorrencias/OcorrenciasController'


export const controllers = [
    ChamadaController,
    UserController,
    CursoController,
    ClasseController,
    UnidadeController,
    FuncionarioController,
    DisciplinaController,
    AtividadeController,
    OcorrenciaController

]
