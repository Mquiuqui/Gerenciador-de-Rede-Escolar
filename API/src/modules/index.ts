import { UnidadeController } from './Acesso/UnidadeController'
import { UserController } from './Acesso/UserController'
import { ClasseController } from './Classes/ClasseController'
import { CursoController } from './Cursos/CursosController'
import { DisciplinaController } from './Disciplina/DisciplinaController'
import { FuncionarioController } from './Funcionario/FuncionarioController'


export const controllers = [
    UserController,
    CursoController,
    ClasseController,
    UnidadeController,
    FuncionarioController,
    DisciplinaController,

]
