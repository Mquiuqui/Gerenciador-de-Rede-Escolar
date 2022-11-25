import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UnidadeEscolar } from "./UnidadeEscolar";

@Entity("administracao", { schema: "prjescola" })
export class Administracao {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Nome", length: 45 })
  nome: string;

  @Column("varchar", { name: "Cargo", length: 40 })
  cargo: string;

  @OneToMany(
    () => UnidadeEscolar,
    (unidadeEscolar) => unidadeEscolar.administrador2
  )
  unidadeEscolars: UnidadeEscolar[];
}
