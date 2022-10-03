import { Column, Entity } from "typeorm";

@Entity("contas_a_receber", { schema: "prjescola" })
export class ContasAReceber {
  @Column("int", { name: "Codigo_Conta", nullable: true })
  codigoConta: number | null;

  @Column("varchar", { name: "Descricao", nullable: true, length: 50 })
  descricao: string | null;

  @Column("tinyint", { name: "Pago", nullable: true })
  pago: number | null;

  @Column("float", { name: "Valor", nullable: true, precision: 12 })
  valor: number | null;

  @Column("date", { name: "Vencimento", nullable: true })
  vencimento: string | null;

  @Column("varchar", { name: "Status_Conta", nullable: true, length: 50 })
  statusConta: string | null;

  @Column("varchar", { name: "Tipo", nullable: true, length: 50 })
  tipo: string | null;

  @Column("varchar", { name: "Observacao", nullable: true, length: 100 })
  observacao: string | null;

  @Column("date", { name: "Data_Pagamento", nullable: true })
  dataPagamento: string | null;

  @Column("int", { primary: true, name: "id" })
  id: number;
}
