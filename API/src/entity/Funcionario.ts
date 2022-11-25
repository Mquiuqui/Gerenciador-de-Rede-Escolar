import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Departamento } from "./Departamento";
import { Professor } from "./Professor";

@Index("FOREIGNKEY_FUNCIONARIO_DEPARTAMENTO_idx", ["codigoDepartamento"], {})
@Entity("funcionario", { schema: "prjescola" })
export class Funcionario {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Nome_Funcionario", nullable: true, length: 50 })
  nomeFuncionario: string | null;

  @Column("varchar", { name: "Cargo", nullable: true, length: 50 })
  cargo: string | null;

  @Column("float", { name: "Salario", nullable: true, precision: 12 })
  salario: number | null;

  @Column("int", { name: "Codigo_Departamento", nullable: true })
  codigoDepartamento: number | null;

  @Column("varchar", { name: "Email", nullable: true, length: 45 })
  email: string | null;

  @Column("varchar", { name: "Senha", nullable: true, length: 45 })
  senha: string | null;

  @ManyToOne(() => Departamento, (departamento) => departamento.funcionarios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "Codigo_Departamento", referencedColumnName: "id" }])
  codigoDepartamento2: Departamento;

  @OneToMany(() => Professor, (professor) => professor.idFuncionario2)
  professors: Professor[];
}
