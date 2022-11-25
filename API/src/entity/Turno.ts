import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Curso } from "./Curso";
import { UnidadeEscolar } from "./UnidadeEscolar";

@Index("FOREIGNKEY_TURNO_UE_idx", ["idEscola"], {})
@Entity("turno", { schema: "prjescola" })
export class Turno {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "ID_escola", nullable: true })
  idEscola: number | null;

  @Column("varchar", { name: "Nome_Turno", nullable: true, length: 15 })
  nomeTurno: string | null;

  @OneToMany(() => Curso, (curso) => curso.idTurno2)
  cursos: Curso[];

  @ManyToOne(() => UnidadeEscolar, (unidadeEscolar) => unidadeEscolar.turnos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_escola", referencedColumnName: "id" }])
  idEscola2: UnidadeEscolar;
}
