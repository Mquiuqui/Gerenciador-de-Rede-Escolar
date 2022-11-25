import { Request } from 'express'
import { AppDataSource } from '../../connection'
import { BadRequestException } from '../../utils/errors/400/BadRequestException'
import { Delete, Get, Post } from '../../utils/decorators/Methods'
import { Funcionario } from '../../entity/Funcionario'
import { Departamento } from '../../entity/Departamento'
import { Professor } from '../../entity/Professor'


export class FuncionarioController {

    private defaultRepository = AppDataSource.getRepository(Funcionario)
    private defaultRepositoryProfessor = AppDataSource.getRepository(Professor)
    private defaultRepositoryDepartamento = AppDataSource.getRepository(Departamento)

    @Get('/Funcionarios')
    async all(req: Request) {
        let response = await this.defaultRepository.find()
        console.log("Funcionarios",response)
        return response

    }

    @Get('/Professores/:id')
    async professoresCurso(req: Request) {
        let response = await this.defaultRepositoryProfessor.find({where:{codigoCurso:Number(req.params.id)}})
        return response

    }

    @Get('/Professores/')
    async professoresAll(req: Request) {
        let response = await this.defaultRepositoryProfessor.find()
        return response

    }

    @Get('/Departamentos')
    async allDept(req: Request) {
        let response = await this.defaultRepositoryDepartamento.find()
        console.log(response)
        return response

    }

    @Get('/Funcionarios/:id')
    async one(req: Request) {

        let response = await this.defaultRepository.findOne({where:{id:Number(req.params.id)},relations: ['professors','professors.codigoCurso2']})
        
        if(!response) throw new BadRequestException("Funcionário não encontrada")
        
        return response

    }

    @Post('/Funcionarios')
    async saveFuncionarios(req: Request) {

        let novoFuncionario = new Funcionario()

        novoFuncionario.nomeFuncionario = req.body.nomeFuncionario
        novoFuncionario.email = req.body.email
        novoFuncionario.senha = req.body.senha
        novoFuncionario.salario = req.body.salario
        novoFuncionario.cargo = req.body.cargo
        novoFuncionario.codigoDepartamento = req.body.codigoDepartamento
        if(req.body.flagProfessor) novoFuncionario.codigoDepartamento = 3
        
        let funcionarioNovo =  await this.defaultRepository.save(novoFuncionario)

        if(req.body.flagProfessor) {
            let funcquery = await this.defaultRepository.find({order:{id:'DESC'}})

            let novoProfessor = new Professor()
    
            novoProfessor.codigoCurso = Number(req.body.codigoCurso)
            novoProfessor.nomeProfessor = req.body.nomeFuncionario
            novoProfessor.idFuncionario = funcquery[0].id
    
            console.log(novoProfessor)
    
            let professorSalvo =  await this.defaultRepositoryProfessor.save(novoProfessor)
            
            console.log(">>>>>",professorSalvo)
    
            return professorSalvo
        }

        return funcionarioNovo


    }

    @Get('/Funcionarios/delete/:id')
    async delete(req: Request) {
        console.log(Number(req.params.id))
        let response = await this.defaultRepository.findOne({where:{id:Number(req.params.id)},relations: ['professors']})
        
        if(!response) throw new BadRequestException("Funcionário não encontrada")
        
        if(response.professors.length > 0){
            let professor = await this.defaultRepositoryProfessor.delete({idFuncionario:response.id})
            if(!professor) throw new BadRequestException("Professor com atividades ativas")
        }

        this.defaultRepository.delete({id:response.id})

        return response

    }

    @Get('/Funcionarios/update/:id')
    async update(req: Request) {
        console.log(Number(req.params.id))
        let response = await this.defaultRepository.findOne({where:{id:Number(req.params.id)},relations: ['professors']})
        
        if(!response) throw new BadRequestException("Funcionário não encontrada")
        
        if(response.professors.length > 0){
            let professor = await this.defaultRepositoryProfessor.delete({idFuncionario:response.id})
            if(!professor) throw new BadRequestException("Professor com atividades ativas")
        }

        this.defaultRepository.delete({id:response.id})

        return response

    }

}
