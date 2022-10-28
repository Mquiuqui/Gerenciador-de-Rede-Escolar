import { Request } from 'express'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post } from '../../utils/decorators/Methods'
import { Departamento } from '../../entity/Departamento'
import { GrupoAcesso } from '../../entity/GrupoAcesso'
import { Aluno } from '../../entity/Aluno'
import { Funcionario } from '../../entity/Funcionario'
import { Disciplina } from '../../entity/Disciplina'


export class UserController {

    private defaultRepository = AppDataSource.getRepository(Departamento)
    private defaultRepositoryMatricula = AppDataSource.getRepository(Aluno)
    private defaultRepositoryFuncionario = AppDataSource.getRepository(Funcionario)
    private defaultRepositoryDisciplina = AppDataSource.getRepository(Disciplina)

    @Post('/aluno/login')
    async login(req: Request) {
        console.log(req.body)
        let a = await this.defaultRepositoryMatricula.findOne({ where: { emailAluno: req.body.login, senhaAluno: req.body.senha }, relations: ['codigoCurso2', 'codigoCurso2.idTurno2', 'codigoClasse2','ocorrencias'] })
        if (!a) throw new BadRequestException("login não encontrado")
        console.log(a)
        if (a.flagMatriculaAceita === 0) throw new Error("Sua Matricula ainda está em Analise, entre em contato com a escola para saber mais")
        return a

    }

    @Post('/funcionario/login')
    async loginFuncionario(req: Request) {
        console.log(req.body)
        let a = await this.defaultRepositoryFuncionario.findOne({ where: { email: req.body.login, senha: req.body.senha }, relations: { codigoDepartamento2: { idAcesso: true }, professors: true } })
        console.log(a)
        if (!a) throw new BadRequestException("login não encontrado")
        return a

    }

    @Post('/Matricula')
    async saveMatricula(req: Request) {

        let existeEmail = await this.defaultRepositoryMatricula.findOne({ where: { emailAluno: req.body.emailAluno } })
        let existeCpf = await this.defaultRepositoryMatricula.findOne({ where: { cpfAluno: req.body.cpfAluno } })

        if (existeEmail && existeEmail.flagMatriculaAceita === 1) throw new Error("Email já cadastradoem uma matricula ativa")

        if (existeCpf && existeCpf.flagMatriculaAceita === 1) throw new Error("Cpf já cadastrado em uma matricula ativa")
        console.log(req.body.nomeAluno.length)
        let novoAluno = new Aluno()
        if (req.body.nomeAluno.length === 0) throw new Error("Nome não pode ser vazio")
        novoAluno.nomeAluno = req.body.nomeAluno
        if (req.body.cpfAluno.length === 0) throw new Error("Email não pode ser vazio")
        novoAluno.emailAluno = req.body.emailAluno
        if (req.body.emailAluno.length === 0) throw new Error("Telefone não pode ser vazio")
        novoAluno.telefone = req.body.telefone
        if (req.body.telefone.length === 0) throw new Error("Endereço não pode ser vazio")
        novoAluno.endereco = req.body.endereco
        if (req.body.endereco.length === 0) throw new Error("Curso não pode ser vazio")
        novoAluno.codigoCurso = Number(req.body.codigoCurso)
        if (req.body.codigoCurso.length === 0) throw new Error("Senha não pode ser vazio")
        novoAluno.senhaAluno = req.body.senhaAluno
        if (req.body.senhaAluno.length === 0) throw new Error("Sexo não pode ser vazio")
        novoAluno.sexoAluno = 'masculino'
        if (req.body.sexoAluno.length === 0) throw new Error("Rg não pode ser vazio")
        novoAluno.rgAluno = req.body.rgAluno
        if (req.body.rgAluno.length === 0) throw new Error("Cpf não pode ser vazio")
        novoAluno.cpfAluno = req.body.cpfAluno
        novoAluno.idAcesso = 5
        novoAluno.flagMatriculaAceita = 0

        console.log('teste')
        return this.defaultRepositoryMatricula.save(novoAluno)

    }

    @Get('/Matriculas')
    all(req: Request) {

        return this.defaultRepositoryMatricula.find()

    }

    @Get('/Matricula/:id')
    async one(req: Request) {

        let response = await this.defaultRepositoryMatricula.findOne({ where: { id: Number(req.params.id) }, relations: ['codigoCurso2', 'codigoCurso2.idTurno2', 'codigoClasse2'] })

        if (!response) throw new BadRequestException("Matricula não encontrada")

        return response

    }

    @Get('/MatriculaDisciplina/:id')
    async allDisciplina(req: Request) {

        let response = await this.defaultRepositoryDisciplina.find({ where: { id: Number(req.params.id) } })

        if (!response) throw new BadRequestException("Disciplina não encontrada")

        let alunos = await this.defaultRepositoryMatricula.find({ where: { codigoClasse: response[0].codigoClasse! }, relations: ['codigoCurso2', 'codigoCurso2.idTurno2', 'codigoClasse2'] })
        console.log(alunos)
        return alunos

    }


    @Post('/aprovarMatricula')
    async aprovarMatricula(req: Request) {
        let matricula = await this.defaultRepositoryMatricula.findOne({ where: { id: Number(req.body.id) } })
        if (!matricula) throw new BadRequestException("Matricula não encontrada")
        matricula.flagMatriculaAceita = 1
        matricula.codigoClasse = Number(req.body.idClasse)

        let matriculaaprovada = await this.defaultRepositoryMatricula.save(matricula)

        return matriculaaprovada


    }

}
