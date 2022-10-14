import { Request } from 'express'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post } from '../../utils/decorators/Methods'

import { Atividade } from '../../entity/Atividade'
import { Nota } from '../../entity/Nota'
import { Ocorrencia } from '../../entity/Ocorrencia'


export class OcorrenciaController {

    private defaultRepository = AppDataSource.getRepository(Ocorrencia)
    private defaultRepositoryNota = AppDataSource.getRepository(Nota)

    @Get('/Ocorrencias')
    async all() {

        let a = await this.defaultRepository.find()
        return a

    }

    @Get('/Ocorrencia/:id')
    async one(req: Request) {

        let a = await this.defaultRepository.findOne({where:{id:Number(req.params.id)}})
        return a

    }

    @Get('/OcorrenciasAluno/:id')
    async porAluno(req: Request) {

        let a = await this.defaultRepository.find({where:{rgmAluno:Number(req.params.id)},relations:['idProfessor2']})
        return a

    }

    // @Get('/AtividadesDisciplina/:id')
    // async porDisciplina(req: Request) {

    //     let a = await this.defaultRepository.find({where:{idDisciplina:Number(req.params.id)}})
    //     return a

    // }

    @Post('/Ocorrencia')
    async saveOcorrencia(req: Request) {
        console.log('teste')
        let novaOcorrencia = new Ocorrencia()

        novaOcorrencia.descricao = req.body.descricao
        novaOcorrencia.data = req.body.data
        novaOcorrencia.rgmAluno =  Number(req.body.rgmAluno)
        novaOcorrencia.idProfessor = Number(req.body.idProfessor)
        novaOcorrencia.justificacao = false

        console.log(novaOcorrencia)
        
        return this.defaultRepository.save(novaOcorrencia)

    }

    @Post('/OcorrenciaExiste')
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

}
