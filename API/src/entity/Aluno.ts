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
import { Classe } from "./Classe";
import { Curso } from "./Curso";
import { Chamada } from "./Chamada";
import { Nota } from "./Nota";
import { Ocorrencia } from "./Ocorrencia";

@Index("FOREIGNKEY_ALUNO_CURSO_idx", ["codigoCurso"], {})
@Index("FOREIGNKEY_ALUNO_CLASSE_idx", ["codigoClasse"], {})
@Index("FOREIGNKEY_ALUNO_ACESSO_idx", ["idAcesso"], {})
@Entity("aluno", { schema: "prjescola" })
export class Aluno {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Nome_Aluno", nullable: true, length: 50 })
  nomeAluno: string | null;

  @Column("varchar", { name: "Endereco", nullable: true, length: 100 })
  endereco: string | null;

  @Column("varchar", { name: "Email_Aluno", nullable: true, length: 100 })
  emailAluno: string | null;

  @Column("varchar", { name: "Telefone", nullable: true, length: 15 })
  telefone: string | null;

  @Column("varchar", { name: "Etnia", nullable: true, length: 15 })
  etnia: string | null;

  @Column("varchar", { name: "Bolsa", nullable: true, length: 10 })
  bolsa: string | null;

  @Column("int", { name: "Codigo_Classe", nullable: true })
  codigoClasse: number | null;

  @Column("int", { name: "Codigo_Curso", nullable: true })
  codigoCurso: number | null;

  @Column("varchar", { name: "Senha_Aluno", nullable: true, length: 45 })
  senhaAluno: string | null;

  @Column("int", { name: "ID_Acesso", nullable: true })
  idAcesso: number | null;

  @Column("tinyint", { name: "Flag_Matricula_aceita", nullable: true })
  flagMatriculaAceita: number | null;

  @Column("varchar", { name: "RG_Aluno", nullable: true, length: 45 })
  rgAluno: string | null;

  @Column("varchar", { name: "CPF_Aluno", nullable: true, length: 45 })
  cpfAluno: string | null;

  @Column("varchar", { name: "Sexo_Aluno", nullable: true, length: 45 })
  sexoAluno: string | null;

  @Column("date", { name: "Data de Nascimento", nullable: true })
  dataDeNascimento: string | null;

  @ManyToOne(() => GrupoAcesso, (grupoAcesso) => grupoAcesso.alunos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ID_Acesso", referencedColumnName: "id" }])
  idAcesso2: GrupoAcesso;

  @ManyToOne(() => Classe, (classe) => classe.alunos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "Codigo_Classe", referencedColumnName: "id" }])
  codigoClasse2: Classe;

  @ManyToOne(() => Curso, (curso) => curso.alunos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "Codigo_Curso", referencedColumnName: "id" }])
  codigoCurso2: Curso;

  @OneToMany(() => Chamada, (chamada) => chamada.rgmAluno2)
  chamadas: Chamada[];

  @OneToMany(() => Nota, (nota) => nota.rgmAluno2)
  notas: Nota[];

  @OneToMany(() => Ocorrencia, (ocorrencia) => ocorrencia.rgmAluno2)
  ocorrencias: Ocorrencia[];
}
