//! Importa a entidade

import { Administracao } from "./Administracao"
import { Aluno } from "./Aluno"
import { Atividade } from "./Atividade"
import { Chamada } from "./Chamada"
import { Classe } from "./Classe"
import { Curso } from "./Curso"
import { Departamento } from "./Departamento"
import { Disciplina } from "./Disciplina"
import { Estoque } from "./Estoque"
import { Funcionario } from "./Funcionario"
import { GrupoAcesso } from "./GrupoAcesso"
import { Nota } from "./Nota"
import { Ocorrencia } from "./Ocorrencia"
import { Parametros } from "./Parametros"
import { Professor } from "./Professor"
import { Turno } from "./Turno"
import { UnidadadeEscolar } from "./UnidadadeEscolar"


export const Tables = {
    *[Symbol.iterator]() {

        //! Adiciona a entidade ao array
        yield Departamento
        yield Funcionario
        yield Professor
        yield Atividade
        yield Disciplina
        yield Chamada
        yield Classe
        yield Curso
        yield GrupoAcesso
        yield Aluno
        yield UnidadadeEscolar
        yield Estoque
        yield Turno
        yield Administracao
        yield Parametros
        yield Nota
        yield Ocorrencia


    }
}
