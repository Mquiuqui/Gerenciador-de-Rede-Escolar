import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Aluno } from "./Aluno";
import { Departamento } from "./Departamento";

@Entity("grupo_acesso", { schema: "prjescola" })
export class GrupoAcesso {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "Tipo_Grupo", nullable: true })
  tipoGrupo: number | null;

  @Column("varchar", { name: "Descricao_Acesso", nullable: true, length: 50 })
  descricaoAcesso: string | null;

  @Column("int", { name: "Nivel_Acesso", nullable: true })
  nivelAcesso: number | null;

  @OneToMany(() => Aluno, (aluno) => aluno.idAcesso2)
  alunos: Aluno[];

  @OneToMany(() => Departamento, (departamento) => departamento.idAcesso2)
  departamentos: Departamento[];
}
