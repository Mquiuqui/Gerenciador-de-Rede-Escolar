import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Curso } from "./Curso";
import { Estoque } from "./Estoque";
import { Professor } from "./Professor";
import { Turno } from "./Turno";
import { Administracao } from "./Administracao";

@Index("Foreignkey_UE_ADM_idx", ["administrador"], {})
@Entity("unidadade_escolar", { schema: "prjescola" })
export class UnidadadeEscolar {
  @Column("int", { primary: true, name: "id" })
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

  @OneToMany(() => Estoque, (estoque) => estoque.idEscola2)
  estoques: Estoque[];

  @OneToMany(() => Professor, (professor) => professor.idEscola2)
  professors: Professor[];

  @OneToMany(() => Turno, (turno) => turno.idEscola2)
  turnos: Turno[];

  @ManyToOne(
    () => Administracao,
    (administracao) => administracao.unidadadeEscolars,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "Administrador", referencedColumnName: "id" }])
  administrador2: Administracao;
}
