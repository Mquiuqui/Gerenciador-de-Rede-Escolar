import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

@Index("RGM_Aluno", ["rgmAluno"], {})
@Index("ID_Professor", ["idProfessor"], {})
@Entity("ocorrencia", { schema: "prjescola" })
export class Ocorrencia {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Descricao", length: 150 })
  descricao: string;

  @Column("tinyint", { name: "Justificacao", nullable: true, width: 1 })
  justificacao: boolean | null;

  @Column("date", { name: "Data", nullable: true })
  data: string | null;

  @Column("int", { name: "RGM_Aluno", nullable: true })
  rgmAluno: number | null;

  @Column("int", { name: "ID_Professor", nullable: true })
  idProfessor: number | null;

  @ManyToOne(() => Aluno, (aluno) => aluno.ocorrencias, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "RGM_Aluno", referencedColumnName: "id" }])
  rgmAluno2: Aluno;

  @ManyToOne(() => Professor, (professor) => professor.ocorrencias, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Professor", referencedColumnName: "id" }])
  idProfessor2: Professor;
}
