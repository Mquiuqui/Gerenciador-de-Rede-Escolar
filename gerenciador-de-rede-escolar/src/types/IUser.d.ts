// export interface IUser {
//     name: string
//     login: string
//     email: string
//     password: string
//     dtCadastro: string
//     key?: string
// }

export interface IUser {
    id:                    number;
    nome:                  string;
    dtNascimento:          null;
    email:                 string;
    login:                 string;
    senha:                 string;
    idPerfilAcesso:        number;
    flagAlterarSenha:      string;
    dtCadastro:            string;
    idUsuarioCadastro:     number;
    dtAlteracao:           string;
    idUsuarioAlteracao:    number;
    ativo:                 string;
    flagSistema:           string;
    flagExcluido:          string;
    descricaoPerfilAcesso: string;
    layout:                string;
    area:                  null;
    controller:            null;
    actionPadrao:          null;
}
