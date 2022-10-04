import { Request } from 'express'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post } from '../../utils/decorators/Methods'
import { Departamento } from '../../entity/Departamento'
import { GrupoAcesso } from '../../entity/GrupoAcesso'
import { Aluno } from '../../entity/Aluno'
import { Funcionario } from '../../entity/Funcionario'
import { UnidadadeEscolar } from '../../entity/UnidadadeEscolar'


export class UnidadeController {

    private defaultRepository = AppDataSource.getRepository(UnidadadeEscolar)

    @Get('/Unidades')
    async all() {

        let a = await this.defaultRepository.find()
        return a

    }

    @Get('/Unidades/:id')
    async one(req: Request) {

        let a = await this.defaultRepository.findOne({where:{id:Number(req.params.id)}})
        return a

    }

    @Post('/Unidades')
    saveUnidade(req: Request) {

        let novaUnidade = new UnidadadeEscolar()

        novaUnidade.administrador = 1
        novaUnidade.endereco = req.body.endereco
        novaUnidade.nomeEscola = req.body.nomeEscola
        
        return this.defaultRepository.save(novaUnidade)

    }

}
