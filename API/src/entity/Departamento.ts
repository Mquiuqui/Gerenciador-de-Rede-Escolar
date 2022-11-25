import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GrupoAcesso } from "./GrupoAcesso";
import { Funcionario } from "./Funcionario";

@Index("FOREIGNKEY_DEPARTAMENTO_ACESSO_idx", ["idAcesso"], {})
@Entity("departamento", { schema: "prjescola" })
export class Departamento {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Nome_Departamento", nullable: true, length: 30 })
  nomeDepartamento: string | null;

  @Column("int", { name: "ID_Acesso", nullable: true })
  idAcesso: number | null;

  @ManyToOne(() => GrupoAcesso, (grupoAcesso) => grupoAcesso.departamentos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Acesso", referencedColumnName: "id" }])
  idAcesso2: GrupoAcesso;

  @OneToMany(
    () => Funcionario,
    (funcionario) => funcionario.codigoDepartamento2
  )
  funcionarios: Funcionario[];
}
