import { Request } from 'express'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post } from '../../utils/decorators/Methods'
import { Departamento } from '../../entity/Departamento'
import { GrupoAcesso } from '../../entity/GrupoAcesso'
import { Aluno } from '../../entity/Aluno'
import { Curso } from '../../entity/Curso'
import { Turno } from '../../entity/Turno'


export class CursoController {

    private defaultRepository = AppDataSource.getRepository(Curso)
    private defaultRepositoryTurno = AppDataSource.getRepository(Turno)

    @Get('/Periodo')
    async allPeriodos() {
        let a = await this.defaultRepositoryTurno.find()
        console.log(a)
        return a

    }

    @Get('/Cursos')
    async all() {
        let a = await this.defaultRepository.find({relations:['idTurno2',"idEscola2"]})
        console.log(a)
        return a

    }

    @Get('/Cursos/:id')
    async one(req:Request) {
        let a = await this.defaultRepository.findOne({where:{id:Number(req.params.id)}})
        return a

    }

    
    @Post('/Cursos')
    async saveCursos(req: Request) {
        console.log("tesrwe")
        let novoCurso = new Curso()

        novoCurso.idEscola = Number(req.body.idEscola)
        novoCurso.nomeCurso = req.body.nomeCurso
        novoCurso.idTurno = Number(req.body.idTurno)
        console.log(novoCurso)
        let cursoSalvo =  await this.defaultRepository.save(novoCurso)
        console.log(cursoSalvo)
        return cursoSalvo

    }

}
