import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Aluno } from "./Aluno";
import { Curso } from "./Curso";
import { Disciplina } from "./Disciplina";
import { Parametros } from "./Parametros";

@Index("FOREIGNKEY_CLASSE_CURSO_idx", ["codigoCurso"], {})
@Entity("classe", { schema: "prjescola" })
export class Classe {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "Codigo_Curso", nullable: true })
  codigoCurso: number | null;

  @Column("varchar", { name: "Descricao_Classe", nullable: true, length: 45 })
  descricaoClasse: string | null;

  @Column("int", { name: "Quantidade_Alunos", nullable: true })
  quantidadeAlunos: number | null;

  @Column("int", { name: "Quantidade_Alunos_Especiais", nullable: true })
  quantidadeAlunosEspeciais: number | null;

  @OneToMany(() => Aluno, (aluno) => aluno.codigoClasse2)
  alunos: Aluno[];

  @ManyToOne(() => Curso, (curso) => curso.classes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "Codigo_Curso", referencedColumnName: "id" }])
  codigoCurso2: Curso;

  @OneToMany(() => Disciplina, (disciplina) => disciplina.codigoClasse2)
  disciplinas: Disciplina[];

  @OneToMany(() => Parametros, (parametros) => parametros.idClasse2)
  parametros: Parametros[];
}
