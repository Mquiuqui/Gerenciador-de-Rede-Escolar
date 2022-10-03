import { Request } from 'express'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post } from '../../utils/decorators/Methods'
import { Departamento } from '../../entity/Departamento'
import { GrupoAcesso } from '../../entity/GrupoAcesso'
import { Aluno } from '../../entity/Aluno'
import { Curso } from '../../entity/Curso'


export class CursoController {

    private defaultRepository = AppDataSource.getRepository(Curso)

    @Get('/Cursos')
    async all() {
        let a = await this.defaultRepository.find()
        console.log("aaa",a)
        return a

    }

}
