import { Request } from 'express'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post } from '../../utils/decorators/Methods'
import { Departamento } from '../../entity/Departamento'
import { GrupoAcesso } from '../../entity/GrupoAcesso'
import { Aluno } from '../../entity/Aluno'
import { Funcionario } from '../../entity/Funcionario'
import { UnidadeEscolar } from '../../entity/UnidadeEscolar'



export class UnidadeController {

    private defaultRepository = AppDataSource.getRepository(UnidadeEscolar)

    @Get('/Unidades')
    async all() {

        let unidade = await this.defaultRepository.find()
        return unidade

    }

    @Get('/Unidades/:id')
    async one(req: Request) {

        let unidade = await this.defaultRepository.findOne({ where: { id: Number(req.params.id) } })
        return unidade

    }

    @Post('/Unidades')
    async saveUnidade(req: Request) {
        console.log(req.body)
        if (req.body.nomeEscola.length === 0) throw new BadRequestException('Nome da escola não informado')
        if (req.body.endereco.length === 0) throw new BadRequestException('Endereço não informado')
        if (req.body.nroEndereco === '') throw new BadRequestException('Número do Endereço não informado')
        let existe = await this.defaultRepository.findOne({ where: { nomeEscola: req.body.nomeEscola } })

        if (existe) throw new BadRequestException('Unidade já cadastrada')

        let novaUnidade = new UnidadeEscolar()

        novaUnidade.administrador = 1
        novaUnidade.endereco = req.body.endereco + ',' + req.body.nroEndereco
        novaUnidade.nomeEscola = req.body.nomeEscola

        return this.defaultRepository.save(novaUnidade)

    }

    @Post('/Unidades/delete')
    async deleteUnidade(req: Request) {
        console.log(req.body)
        let unidade = await this.defaultRepository.findOne({ where: { id: Number(req.body.id) } })
        if (unidade) {
            return await this.defaultRepository.remove(unidade)
        }

    }

    @Post('/Unidades/update')
    async update(req: Request) {
        let unidade = await this.defaultRepository.findOne({ where: { id: Number(req.body.id) } })
        if (!unidade) throw new BadRequestException('Unidade não cadastrada')
        unidade.nomeEscola = req.body.nomeEscola
        unidade.endereco = req.body.endereco + ',' + req.body.nroEndereco
        
        let save = await this.defaultRepository.save(unidade)
        console.log(save)
        return unidade


    }

}
    