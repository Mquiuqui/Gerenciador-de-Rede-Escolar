import { Column, Entity, OneToMany } from "typeorm";
import { UnidadadeEscolar } from "./UnidadadeEscolar";

@Entity("administracao", { schema: "prjescola" })
export class Administracao {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "Nome", length: 45 })
  nome: string;

  @Column("varchar", { name: "Cargo", length: 40 })
  cargo: string;

  @OneToMany(
    () => UnidadadeEscolar,
    (unidadadeEscolar) => unidadadeEscolar.administrador2
  )
  unidadadeEscolars: UnidadadeEscolar[];
}
