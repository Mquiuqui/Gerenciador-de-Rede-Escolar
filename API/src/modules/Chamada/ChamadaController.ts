import { Request } from 'express'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post } from '../../utils/decorators/Methods'

import { Atividade } from '../../entity/Atividade'
import { Nota } from '../../entity/Nota'
import { Chamada } from '../../entity/Chamada'


export class ChamadaController {

    private defaultRepository = AppDataSource.getRepository(Chamada)
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

    @Get('/ChamadasAluno/:id')
    async porDisciplinaAluno(req: Request) {
        console.log(req.query.id)
        let a = await this.defaultRepository.find({where:{rgmAluno:Number(req.params.id)}})
        console.log(a)
        return a

    }

    @Get('/ChamadasProfessor')
    async porDisciplinProfessor(req: Request) {

        let a = await this.defaultRepository.find({where:{idDisciplina:Number(req.query.id)}})
        return a

    }

    @Post('/Chamada')
    saveChamada(req: Request) {
        console.log(req.body)
        req.body.map(async (chamada:any) => {
            let novachamada = new Chamada()

            novachamada.idDisciplina = chamada.idDisciplina
            novachamada.dia = new Date().toISOString().split('T')[0]
            novachamada.rgmAluno = chamada.idAluno
            novachamada.presenca = 0
            
            let response = await this.defaultRepository.save(novachamada)
            console.log(response)
        }
        )
        return {message: "Chamada realizada com sucesso!"}

    }

}
