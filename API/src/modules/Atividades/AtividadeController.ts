import { Request } from 'express'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post } from '../../utils/decorators/Methods'

import { Atividade } from '../../entity/Atividade'
import { Nota } from '../../entity/Nota'


export class AtividadeController {

    private defaultRepository = AppDataSource.getRepository(Atividade)
    private defaultRepositoryNota = AppDataSource.getRepository(Nota)

    @Get('/Atividades')
    async all() {

        let a = await this.defaultRepository.find()
        return a

    }

    @Get('/Atividades/:id')
    async one(req: Request) {

        let a = await this.defaultRepository.findOne({where:{id:Number(req.params.id)}})
        return a

    }

    @Get('/AtividadesDisciplina/:id')
    async porDisciplina(req: Request) {

        let a = await this.defaultRepository.find({where:{idDisciplina:Number(req.params.id)}})
        return a

    }

    @Post('/Atividades')
    saveAtividade(req: Request) {

        let novaAtividade = new Atividade()

        novaAtividade.idDisciplina = req.body.idDisciplina
        novaAtividade.tituloAtividade = req.body.tituloAtividade
        novaAtividade.idProfessor = req.body.idProfessor
        novaAtividade.dataAtividade = req.body.dataAtividade
        
        return this.defaultRepository.save(novaAtividade)

    }

    @Post('/Nota')
    async saveNota(req: Request) {
        console.log('teste')
        let notaExiste = await this.defaultRepositoryNota.findOne({where:{rgmAluno:Number(req.body.rgmAluno), idAtividade:Number(req.body.idAtividade)}})
        console.log(notaExiste)
        if(notaExiste){
            notaExiste.nota = Number(req.body.nota)
            return this.defaultRepositoryNota.save(notaExiste)
        }

        let novaAtividade = new Nota()

        novaAtividade.idDisciplina = req.body.idDisciplina
        novaAtividade.nota = Number(req.body.nota)
        novaAtividade.rgmAluno =  Number(req.body.rgmAluno)
        novaAtividade.idAtividade = Number(req.body.idAtividade)
        
        return this.defaultRepositoryNota.save(novaAtividade)

    }

    @Post('/Notas')
    async notaExiste(req: Request) {
        console.log('teste')
        let notaExiste = await this.defaultRepositoryNota.findOneOrFail({where:{rgmAluno:Number(req.body.rgmAluno), idAtividade:Number(req.body.idAtividade)}})
        console.log(notaExiste)
        if(notaExiste){
            console.log('existe')
            return [notaExiste]
        }
        return null

    }

    @Get('/NotasAluno/:id')
    async notaAluno(req: Request) {
        let a = await this.defaultRepositoryNota.find({where:{rgmAluno:Number(req.params.id)},relations:['idAtividade2','rgmAluno2']})
        console.log(a)
        return a
    }

}
