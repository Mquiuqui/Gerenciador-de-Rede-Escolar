import { Request } from 'express'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post } from '../../utils/decorators/Methods'
import { Departamento } from '../../entity/Departamento'
import { GrupoAcesso } from '../../entity/GrupoAcesso'
import { Aluno } from '../../entity/Aluno'
import { Curso } from '../../entity/Curso'
import { Classe } from '../../entity/Classe'


export class ClasseController {

    private defaultRepository = AppDataSource.getRepository(Classe)

    @Get('/Classes')
    async all() {
        let a = await this.defaultRepository.find({relations:['codigoCurso2']})
        return a

    }

    @Get('/Classe/:id')
    async one(req: Request) {
        let a = await this.defaultRepository.findOne({where:{id:Number(req.params.id)}})
        return a

    }

    @Get('/Classes/:id')
    async porCurso(req: Request) {
        console.log(req.params)
        let a = await this.defaultRepository.find({where:{codigoCurso:Number(req.params.id)}})
        return a

    }

    @Post('/Classe')
    async saveClasse(req: Request) {

        let novaClasse = new Classe()

        novaClasse.codigoCurso = Number(req.body.codigoCurso)
        novaClasse.descricaoClasse = req.body.descricaoClasse
        novaClasse.quantidadeAlunos = Number(req.body.quantidadeAlunos)
        novaClasse.quantidadeAlunosEspeciais = Number(req.body.quantidadeAlunosEspeciais)

        console.log(novaClasse)
        let classeSave = await this.defaultRepository.save(novaClasse)

        return classeSave
    }
    

}
