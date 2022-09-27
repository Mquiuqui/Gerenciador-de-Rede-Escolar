export interface IGestaoMorador {
    atualizado:  number;
    id:          number;
    nome:        string;
    tipoDoc:     string;
    nrDoc:       string;
    telefone:    string;
    email:       string;
    flagFoto:    number;
    dtCadastro:  Date;
    condominio:  string;
    situacao:    string;
    ultmoAcesso: string;
}
