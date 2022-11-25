import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Disciplina } from "./Disciplina";
import { Professor } from "./Professor";
import { Nota } from "./Nota";

@Index("FOREIGNKEY_ATIVIDADE_DISCIPLINA_idx", ["idDisciplina"], {})
@Index("FOREIGNKEY_ATIVIDADE_PROFESSOR_idx", ["idProfessor"], {})
@Entity("atividade", { schema: "prjescola" })
export class Atividade {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Titulo_Atividade", nullable: true, length: 30 })
  tituloAtividade: string | null;

  @Column("int", { name: "ID_Disciplina", nullable: true })
  idDisciplina: number | null;

  @Column("date", { name: "Data_Atividade", nullable: true })
  dataAtividade: string | null;

  @Column("int", { name: "ID_Professor", nullable: true })
  idProfessor: number | null;

  @ManyToOne(() => Disciplina, (disciplina) => disciplina.atividades, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Disciplina", referencedColumnName: "id" }])
  idDisciplina2: Disciplina;

  @ManyToOne(() => Professor, (professor) => professor.atividades, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Professor", referencedColumnName: "id" }])
  idProfessor2: Professor;

  @OneToMany(() => Nota, (nota) => nota.idAtividade2)
  notas: Nota[];
}
