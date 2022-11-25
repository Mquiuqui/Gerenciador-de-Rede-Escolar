import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Classe } from "./Classe";
import { Curso } from "./Curso";
import { Disciplina } from "./Disciplina";

@Index("FOREIGNKEY_PARAMETROS_CURSO_idx", ["idCurso"], {})
@Index("FOREIGNKEY_PARAMETROS_CLASSE_idx", ["idClasse"], {})
@Index("FOREIGNKEY_PARAMETROS_DISCIPLINA_idx", ["idDisciplina"], {})
@Entity("parametros", { schema: "prjescola" })
export class Parametros {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "descricao", nullable: true, length: 50 })
  descricao: string | null;

  @Column("double", { name: "valor", nullable: true, precision: 22 })
  valor: number | null;

  @Column("int", { name: "ID_Disciplina", nullable: true })
  idDisciplina: number | null;

  @Column("int", { name: "ID_Curso", nullable: true })
  idCurso: number | null;

  @Column("int", { name: "ID_Classe", nullable: true })
  idClasse: number | null;

  @ManyToOne(() => Classe, (classe) => classe.parametros, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Classe", referencedColumnName: "id" }])
  idClasse2: Classe;

  @ManyToOne(() => Curso, (curso) => curso.parametros, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Curso", referencedColumnName: "id" }])
  idCurso2: Curso;

  @ManyToOne(() => Disciplina, (disciplina) => disciplina.parametros, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Disciplina", referencedColumnName: "id" }])
  idDisciplina2: Disciplina;
}
