import { Request } from 'express'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post } from '../../utils/decorators/Methods'

import { Atividade } from '../../entity/Atividade'
import { Nota } from '../../entity/Nota'
import { Chamada } from '../../entity/Chamada'


export class ChamadaController {

    private defaultRepository = AppDataSource.getRepository(Atividade)
    private defaultRepositoryNota = AppDataSource.getRepository(Nota)

    @Get('/Chamadas')
    async all() {

        let a = await this.defaultRepository.find()
        return a

    }

    @Get('/Chamadas/:id')
    async one(req: Request) {

        let a = await this.defaultRepository.findOne({where:{id:Number(req.params.id)}})
        return a

    }

    @Get('/ChamadasDisciplina/:id')
    async porDisciplina(req: Request) {

        let a = await this.defaultRepository.find({where:{idDisciplina:Number(req.params.id)}})
        return a

    }

    @Get('/ChamadasAluno')
    async porDisciplinaAluno(req: Request) {

        let a = await this.defaultRepository.find({where:{idDisciplina:Number(req.query.id)}})
        return a

    }

    @Get('/ChamadasProfessor')
    async porDisciplinProfessor(req: Request) {

        let a = await this.defaultRepository.find({where:{idDisciplina:Number(req.query.id)}})
        return a

    }

    @Post('/Chamada')
    saveChamada(req: Request) {

        req.body.chamada.map(async (chamada:any) => {
            let novaAtividade = new Chamada()

            novaAtividade.idDisciplina = chamada.idDisciplina
            novaAtividade.dia = chamada.dia
            novaAtividade.rgmAluno = chamada.idAluno
            novaAtividade.presenca = chamada.presenca
            
            return this.defaultRepository.save(novaAtividade)
        }
        )

    }

}
