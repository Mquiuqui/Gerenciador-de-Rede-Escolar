import { Request } from 'express'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post } from '../../utils/decorators/Methods'

import { Atividade } from '../../entity/Atividade'
import { Nota } from '../../entity/Nota'
import { Chamada } from '../../entity/Chamada'
import { Disciplina } from '../../entity/Disciplina'


export class ChamadaController {

    private defaultRepository = AppDataSource.getRepository(Chamada)
    private defaultRepositoryDisciplina = AppDataSource.getRepository(Disciplina)
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

        let disciplina = await this.defaultRepositoryDisciplina.find()
        let a = await this.defaultRepository.find({where:{rgmAluno:Number(req.params.id)}})
        
        let retorno:any[]=[]

        disciplina.map(async (disciplina:any) => {
            let lista:any[]=[]
            a.map(async (chamada:any) => {
                if(chamada.idDisciplina == disciplina.id){
                    let obj = {
                        id: disciplina.id,
                        nome: disciplina.nomeDisciplina,
                        presenca: chamada.presenca
                    }
                    lista.push(obj)
                }
            })
            retorno.push(lista)
        })

        // let b = await this.defaultRepository.createQueryBuilder("chamada")
        //     .where(`chamada.rgmAluno = :id`, {id: Number(req.params.id)})
        //     .getManyAndCount()
        
        console.log(retorno)
    
        return retorno

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
