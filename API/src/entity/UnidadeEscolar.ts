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
import { Professor } from "./Professor";
import { Turno } from "./Turno";
import { Administracao } from "./Administracao";

@Index("Foreignkey_UE_ADM_idx", ["administrador"], {})
@Entity("unidade_escolar", { schema: "prjescola" })
export class UnidadeEscolar {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Nome_Escola", length: 250 })
  nomeEscola: string;

  @Column("varchar", { name: "Endereco", length: 250 })
  endereco: string;

  @Column("int", { name: "Estoque", nullable: true })
  estoque: number | null;

  @Column("int", { name: "Entrada_Saida", nullable: true })
  entradaSaida: number | null;

  @Column("int", { name: "Administrador", nullable: true })
  administrador: number | null;

  @OneToMany(() => Curso, (curso) => curso.idEscola2)
  cursos: Curso[];

  @OneToMany(() => Professor, (professor) => professor.idEscola2)
  professors: Professor[];

  @OneToMany(() => Turno, (turno) => turno.idEscola2)
  turnos: Turno[];

  @ManyToOne(
    () => Administracao,
    (administracao) => administracao.unidadeEscolars,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "Administrador", referencedColumnName: "id" }])
  administrador2: Administracao;
}
