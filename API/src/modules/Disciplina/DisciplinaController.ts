import { Request } from 'express'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post } from '../../utils/decorators/Methods'
import { UnidadadeEscolar } from '../../entity/UnidadadeEscolar'
import { Disciplina } from '../../entity/Disciplina'


export class DisciplinaController {

    private defaultRepository = AppDataSource.getRepository(Disciplina)

    @Get('/Disciplinas')
    async all() {

        let a = await this.defaultRepository.find({relations:['idProfessor2','codigoCurso2','codigoClasse2']})
       
       console.log(a)

        return a

    }

    @Get('/Disciplinas/:id')
    async one(req: Request) {

        let a = await this.defaultRepository.findOne({where:{id:Number(req.params.id)}})
        return a

    }

    @Get('/DisciplinasProfessor/:id')
    async porProfessor(req: Request) {

        let a = await this.defaultRepository.find({where:{idProfessor:Number(req.params.id)},relations:['idProfessor2','codigoCurso2','codigoClasse2']})
        console.log(a)
        return a

    }

    @Post('/Disciplinas')
    saveUnidade(req: Request) {

        let novaDisciplina = new Disciplina()
        if(req.body.nomeDisciplina.length === 0) throw new Error('Nome da Disciplina não informado')
        novaDisciplina.nomeDisciplina = req.body.nomeDisciplina
        novaDisciplina.codigoCurso = req.body.codigoCurso
        novaDisciplina.codigoClasse = req.body.codigoClasse
        novaDisciplina.idProfessor = req.body.idProfessor
        console.log(novaDisciplina)
        return this.defaultRepository.save(novaDisciplina)

    }

}
