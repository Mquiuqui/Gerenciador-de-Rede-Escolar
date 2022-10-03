import { Column, Entity } from "typeorm";

@Entity("caixa", { schema: "prjescola" })
export class Caixa {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("float", { name: "Valor", nullable: true, precision: 12 })
  valor: number | null;

  @Column("varchar", { name: "Descricao_Caixa", nullable: true, length: 50 })
  descricaoCaixa: string | null;

  @Column("int", { name: "ID_Escola", nullable: true })
  idEscola: number | null;
}
