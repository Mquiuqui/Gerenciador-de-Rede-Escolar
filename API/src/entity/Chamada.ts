import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Aluno } from "./Aluno";
import { Disciplina } from "./Disciplina";

@Index("FOREIGNKEY_CHAMADA_DISCIPLINA_idx", ["idDisciplina"], {})
@Index("FOREIGNKEY_CHAMADA_ALUNO_idx", ["rgmAluno"], {})
@Entity("chamada", { schema: "prjescola" })
export class Chamada {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("tinyint", { name: "Presenca", nullable: true })
  presenca: number | null;

  @Column("date", { name: "Dia", nullable: true })
  dia: string | null;

  @Column("int", { name: "RGM_Aluno", nullable: true })
  rgmAluno: number | null;

  @Column("int", { name: "ID_Disciplina", nullable: true })
  idDisciplina: number | null;

  @ManyToOne(() => Aluno, (aluno) => aluno.chamadas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "RGM_Aluno", referencedColumnName: "id" }])
  rgmAluno2: Aluno;

  @ManyToOne(() => Disciplina, (disciplina) => disciplina.chamadas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Disciplina", referencedColumnName: "id" }])
  idDisciplina2: Disciplina;
}
