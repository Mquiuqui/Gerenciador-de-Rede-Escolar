import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Curso } from "./Curso";
import { UnidadadeEscolar } from "./UnidadadeEscolar";

@Index("FOREIGNKEY_TURNO_UE_idx", ["idEscola"], {})
@Entity("turno", { schema: "prjescola" })
export class Turno {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("int", { name: "ID_escola", nullable: true })
  idEscola: number | null;

  @Column("varchar", { name: "Nome_Turno", nullable: true, length: 15 })
  nomeTurno: string | null;

  @OneToMany(() => Curso, (curso) => curso.idTurno2)
  cursos: Curso[];

  @ManyToOne(
    () => UnidadadeEscolar,
    (unidadadeEscolar) => unidadadeEscolar.turnos,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "ID_escola", referencedColumnName: "id" }])
  idEscola2: UnidadadeEscolar;
}
