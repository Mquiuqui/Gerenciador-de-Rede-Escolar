import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Aluno } from "./Aluno";
import { Atividade } from "./Atividade";

@Index("FOREIGNKEY_NOTA_ATIVIDADE_idx", ["idAtividade"], {})
@Index("FOREIGNKEY_NOTA_ALUNO_idx", ["rgmAluno"], {})
@Entity("nota", { schema: "prjescola" })
export class Nota {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("double", { name: "nota", nullable: true, precision: 22 })
  nota: number | null;

  @Column("int", { name: "RGM_Aluno", nullable: true })
  rgmAluno: number | null;

  @Column("int", { name: "ID_Disciplina", nullable: true })
  idDisciplina: number | null;

  @Column("int", { name: "ID_Atividade", nullable: true })
  idAtividade: number | null;

  @ManyToOne(() => Aluno, (aluno) => aluno.notas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "RGM_Aluno", referencedColumnName: "id" }])
  rgmAluno2: Aluno;

  @ManyToOne(() => Atividade, (atividade) => atividade.notas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Atividade", referencedColumnName: "id" }])
  idAtividade2: Atividade;
}
