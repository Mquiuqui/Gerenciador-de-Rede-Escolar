import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FlashMessageService } from 'src/app/components/flash-message/flash-message.service';
import { AccountService } from 'src/app/core/auth/auth.account.service';
import { VisualizarMatriculaService } from './visualizar-matricula.service';

@Component({
  selector: 'app-visualizar-matricula',
  templateUrl: './visualizar-matricula.component.html',
  styleUrls: ['./visualizar-matricula.component.css']
})
export class VisualizarMatriculaComponent implements OnInit {

  rota: Router
  user: AccountService
  listaClasses: any[] = []
  AcessoId: number
  matricula: any = null
  constructor(
    private route: Router,
    private routeActive: ActivatedRoute,
    private auth: AccountService,
    private service: VisualizarMatriculaService,
    private flashMessageService: FlashMessageService,
    //private service: MatriculaService
  ) {
    this.rota = this.route
    this.user = this.auth
  }


  ngOnInit(): void {
    this.loadData()
    this.AcessoId = this.user.userValue.idAcesso ? this.user.userValue.idAcesso : this.user.userValue.codigoDepartamento2.idAcesso

  }

  async loadData() {
    // this.matricula = (await lastValueFrom(this.service.getMatricula())).listaResultados
    this.routeActive.params.subscribe(async data => {

      try {
        const result = (await lastValueFrom(this.service.getMatricula(data["id"]))).listaResultados
        this.matricula = result
        let classes = (await lastValueFrom(this.service.getClasses(this.matricula.codigoCurso2.id))).listaResultados
        this.listaClasses = classes
      } catch (error) {
        this.flashMessageService.show(error.message, 'error')
      }
    })


  }

  async aprovar(id: string,idClasse: string) {

    try{
      let response = (await lastValueFrom(this.service.aprovar(id,idClasse)))
      this.flashMessageService.show('Salvo com sucesso', 'success')
      this.rota.navigate(['/listar_matriculas'])
    }catch(error){
      this.flashMessageService.show(error.message, 'error')
    }
    
  }

}
