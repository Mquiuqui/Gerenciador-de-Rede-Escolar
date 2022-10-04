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

@Index("FOREIGNKEY_OCORRENCIA_ALUNO_idx", ["idAluno"], {})
@Index("FOREIGNKEY_OCORRENCIA_PROFESSOR_idx", ["idProfessor"], {})
@Entity("ocorrencia", { schema: "prjescola" })
export class Ocorrencia {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "ID_Aluno", nullable: true })
  idAluno: number | null;

  @Column("int", { name: "ID_Professor", nullable: true })
  idProfessor: number | null;

  @Column("varchar", {
    name: "Descricao_Ocorrencia",
    nullable: true,
    length: 45,
  })
  descricaoOcorrencia: string | null;

  @Column("varchar", { name: "Titulo_Ocorrencia", nullable: true, length: 45 })
  tituloOcorrencia: string | null;

  @ManyToOne(() => Aluno, (aluno) => aluno.ocorrencias, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Aluno", referencedColumnName: "id" }])
  idAluno2: Aluno;

  @ManyToOne(() => Professor, (professor) => professor.ocorrencias, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Professor", referencedColumnName: "id" }])
  idProfessor2: Professor;
}
