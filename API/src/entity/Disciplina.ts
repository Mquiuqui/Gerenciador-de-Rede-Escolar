import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Atividade } from "./Atividade";
import { Chamada } from "./Chamada";
import { Classe } from "./Classe";
import { Curso } from "./Curso";
import { Professor } from "./Professor";
import { Parametros } from "./Parametros";

@Index("FOREIGNKEY_DISCIPLINA_CLASSE_idx", ["codigoClasse"], {})
@Index("FOREIGNKEY_DISCIPLINA_CURSO_idx", ["codigoCurso"], {})
@Index("FOREIGNKEY_DISCIPLINA_PROFESSOR_idx", ["idProfessor"], {})
@Entity("disciplina", { schema: "prjescola" })
export class Disciplina {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "Nome_Disciplina", nullable: true, length: 50 })
  nomeDisciplina: string | null;

  @Column("int", { name: "ID_Professor", nullable: true })
  idProfessor: number | null;

  @Column("int", { name: "Codigo_Curso", nullable: true })
  codigoCurso: number | null;

  @Column("int", { name: "Codigo_Classe", nullable: true })
  codigoClasse: number | null;

  @OneToMany(() => Atividade, (atividade) => atividade.idDisciplina2)
  atividades: Atividade[];

  @OneToMany(() => Chamada, (chamada) => chamada.idDisciplina2)
  chamadas: Chamada[];

  @ManyToOne(() => Classe, (classe) => classe.disciplinas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "Codigo_Classe", referencedColumnName: "id" }])
  codigoClasse2: Classe;

  @ManyToOne(() => Curso, (curso) => curso.disciplinas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "Codigo_Curso", referencedColumnName: "id" }])
  codigoCurso2: Curso;

  @ManyToOne(() => Professor, (professor) => professor.disciplinas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Professor", referencedColumnName: "id" }])
  idProfessor2: Professor;

  @OneToMany(() => Parametros, (parametros) => parametros.idDisciplina2)
  parametros: Parametros[];
}
