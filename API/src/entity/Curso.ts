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
import { Classe } from "./Classe";
import { Turno } from "./Turno";
import { UnidadeEscolar } from "./UnidadeEscolar";
import { Disciplina } from "./Disciplina";
import { Parametros } from "./Parametros";
import { Professor } from "./Professor";

@Index("FOREIGNKEY_CURSO_TURNO_idx", ["idTurno"], {})
@Index("FOREIGNKEY_CURSO_TURNO_idx1", ["idEscola"], {})
@Entity("curso", { schema: "prjescola" })
export class Curso {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Nome_Curso", nullable: true, length: 50 })
  nomeCurso: string | null;

  @Column("int", { name: "ID_Escola", nullable: true })
  idEscola: number | null;

  @Column("int", { name: "ID_Turno", nullable: true })
  idTurno: number | null;

  @Column("int", { name: "ID_Classe", nullable: true })
  idClasse: number | null;

  @OneToMany(() => Aluno, (aluno) => aluno.codigoCurso2)
  alunos: Aluno[];

  @OneToMany(() => Classe, (classe) => classe.codigoCurso2)
  classes: Classe[];

  @ManyToOne(() => Turno, (turno) => turno.cursos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Turno", referencedColumnName: "id" }])
  idTurno2: Turno;

  @ManyToOne(() => UnidadeEscolar, (unidadeEscolar) => unidadeEscolar.cursos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Escola", referencedColumnName: "id" }])
  idEscola2: UnidadeEscolar;

  @OneToMany(() => Disciplina, (disciplina) => disciplina.codigoCurso2)
  disciplinas: Disciplina[];

  @OneToMany(() => Parametros, (parametros) => parametros.idCurso2)
  parametros: Parametros[];

  @OneToMany(() => Professor, (professor) => professor.codigoCurso2)
  professors: Professor[];
}
