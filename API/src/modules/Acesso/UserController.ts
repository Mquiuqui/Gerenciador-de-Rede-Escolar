import { Request } from 'express'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post } from '../../utils/decorators/Methods'
import { Departamento } from '../../entity/Departamento'
import { GrupoAcesso } from '../../entity/GrupoAcesso'
import { Aluno } from '../../entity/Aluno'
import { Funcionario } from '../../entity/Funcionario'


export class UserController {

    private defaultRepository = AppDataSource.getRepository(Departamento)
    private defaultRepositoryMatricula = AppDataSource.getRepository(Aluno)
    private defaultRepositoryFuncionario = AppDataSource.getRepository(Funcionario)

    @Post('/aluno/login')
    async login(req: Request) {
        let a = await this.defaultRepositoryMatricula.findOne({where:{id:Number(req.body.login),senhaAluno:req.body.senha}})
        if(!a) throw new BadRequestException("login não encontrado")
        console.log(a)
        if(a.flagMatriculaAceita === 0) throw new Error("Sua Matricula ainda está em Analise, entre em contato com a escola para saber mais")
        return a

    }

    @Post('/funcionario/login')
    async loginFuncionario(req: Request) {

        let a = await this.defaultRepositoryFuncionario.findOne({where:{id:Number(req.body.login),senha:req.body.senha},relations:{codigoDepartamento2:{idAcesso:true}}})
        console.log(a)
        if(!a) throw new BadRequestException("login não encontrado")
        return a

    }

    @Post('/Matricula')
    saveMatricula(req: Request) {

        let novoAluno = new Aluno()

        novoAluno.nomeAluno = req.body.nomeAluno
        novoAluno.emailAluno = req.body.emailAluno
        novoAluno.telefone = req.body.telefone
        novoAluno.endereco = req.body.endereco
        novoAluno.codigoCurso = Number(req.body.codigoCurso)
        novoAluno.senhaAluno = req.body.senhaAluno
        novoAluno.sexoAluno = 'masculino'
        novoAluno.rgAluno = req.body.rgAluno
        novoAluno.cpfAluno = req.body.cpfAluno
        novoAluno.idAcesso = 5
        novoAluno.flagMatriculaAceita = 0


        return this.defaultRepositoryMatricula.save(novoAluno)

    }

    @Get('/Matriculas')
    all(req: Request) {

        return this.defaultRepositoryMatricula.find()

    }

    @Post('/aprovarMatricula')
    async aprovarMatricula(req: Request) {
        let matricula = await this.defaultRepositoryMatricula.findOne({where:{id:Number(req.body.id)}})
        if(!matricula) throw new BadRequestException("Matricula não encontrada")
        matricula.flagMatriculaAceita = 1

        let matriculaaprovada = await this.defaultRepositoryMatricula.save(matricula)
    
        return matricula
        
        
    }

}
