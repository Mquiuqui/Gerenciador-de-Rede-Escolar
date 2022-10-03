import { Column, Entity } from "typeorm";

@Entity("recebimentos", { schema: "prjescola" })
export class Recebimentos {
  @Column("int", { name: "Codigo_Recebimento", nullable: true })
  codigoRecebimento: number | null;

  @Column("varchar", { name: "Nome_Transacao", nullable: true, length: 50 })
  nomeTransacao: string | null;

  @Column("date", { name: "Data_Transacao", nullable: true })
  dataTransacao: string | null;

  @Column("float", { name: "Valor_Transacao", nullable: true, precision: 12 })
  valorTransacao: number | null;

  @Column("tinyint", { name: "Tipo_Transacao", nullable: true })
  tipoTransacao: number | null;

  @Column("int", { primary: true, name: "id" })
  id: number;
}
