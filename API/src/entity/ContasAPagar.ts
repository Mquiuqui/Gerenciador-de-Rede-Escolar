import { Column, Entity } from "typeorm";

@Entity("contas_a_pagar", { schema: "prjescola" })
export class ContasAPagar {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("int", { name: "Codigo_Conta", nullable: true })
  codigoConta: number | null;

  @Column("varchar", { name: "Descricao_Conta", nullable: true, length: 50 })
  descricaoConta: string | null;

  @Column("tinyint", { name: "Pago", nullable: true })
  pago: number | null;

  @Column("float", { name: "Valor", nullable: true, precision: 12 })
  valor: number | null;

  @Column("date", { name: "Vencimento", nullable: true })
  vencimento: string | null;

  @Column("varchar", { name: "Status_Conta", nullable: true, length: 15 })
  statusConta: string | null;

  @Column("varchar", { name: "Tipo", nullable: true, length: 45 })
  tipo: string | null;

  @Column("varchar", { name: "Observacao", nullable: true, length: 150 })
  observacao: string | null;

  @Column("date", { name: "Data_Conta", nullable: true })
  dataConta: string | null;
}
