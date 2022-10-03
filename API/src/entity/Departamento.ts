import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { GrupoAcesso } from "./GrupoAcesso";
import { Funcionario } from "./Funcionario";

@Index("FOREIGNKEY_DEPARTAMENTO_ACESSO_idx", ["idAcesso"], {})
@Entity("departamento", { schema: "prjescola" })
export class Departamento {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "Nome_Departamento", nullable: true, length: 30 })
  nomeDepartamento: string | null;

  @ManyToOne(() => GrupoAcesso, (grupoAcesso) => grupoAcesso.departamentos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Acesso", referencedColumnName: "id" }])
  idAcesso: GrupoAcesso;

  @OneToMany(
    () => Funcionario,
    (funcionario) => funcionario.codigoDepartamento2
  )
  funcionarios: Funcionario[];
}
