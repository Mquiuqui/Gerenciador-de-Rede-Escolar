import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { UnidadadeEscolar } from "./UnidadadeEscolar";

@Index("FOREIGNKEY_ESTOQUE_UE_idx", ["idEscola"], {})
@Entity("estoque", { schema: "prjescola" })
export class Estoque {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "Descricao", nullable: true, length: 250 })
  descricao: string | null;

  @Column("varchar", { name: "Nome_Item", nullable: true, length: 250 })
  nomeItem: string | null;

  @Column("int", { name: "Quantidade", nullable: true })
  quantidade: number | null;

  @Column("int", { name: "Id_escola", nullable: true })
  idEscola: number | null;

  @ManyToOne(
    () => UnidadadeEscolar,
    (unidadadeEscolar) => unidadadeEscolar.estoques,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "Id_escola", referencedColumnName: "id" }])
  idEscola2: UnidadadeEscolar;
}
