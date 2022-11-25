import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Atividade } from "./Atividade";
import { Disciplina } from "./Disciplina";
import { Ocorrencia } from "./Ocorrencia";
import { Curso } from "./Curso";
import { Funcionario } from "./Funcionario";
import { UnidadeEscolar } from "./UnidadeEscolar";

@Index("FOREIGNKEY_PROFESSOR_UE_idx", ["idEscola"], {})
@Index("FOREIGNKEY_PROFESSOR_CURSO_idx", ["codigoCurso"], {})
@Index("FOREIGNKEY_PROFESSOR_FUNCIONARIO_idx", ["idFuncionario"], {})
@Entity("professor", { schema: "prjescola" })
export class Professor {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Nome_Professor", nullable: true, length: 50 })
  nomeProfessor: string | null;

  @Column("int", { name: "ID_Escola", nullable: true })
  idEscola: number | null;

  @Column("int", { name: "Codigo_Curso", nullable: true })
  codigoCurso: number | null;

  @Column("int", { name: "ID_Funcionario", nullable: true })
  idFuncionario: number | null;

  @OneToMany(() => Atividade, (atividade) => atividade.idProfessor2)
  atividades: Atividade[];

  @OneToMany(() => Disciplina, (disciplina) => disciplina.idProfessor2)
  disciplinas: Disciplina[];

  @OneToMany(() => Ocorrencia, (ocorrencia) => ocorrencia.idProfessor2)
  ocorrencias: Ocorrencia[];

  @ManyToOne(() => Curso, (curso) => curso.professors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "Codigo_Curso", referencedColumnName: "id" }])
  codigoCurso2: Curso;

  @ManyToOne(() => Funcionario, (funcionario) => funcionario.professors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Funcionario", referencedColumnName: "id" }])
  idFuncionario2: Funcionario;

  @ManyToOne(
    () => UnidadeEscolar,
    (unidadeEscolar) => unidadeEscolar.professors,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "ID_Escola", referencedColumnName: "id" }])
  idEscola2: UnidadeEscolar;
}
