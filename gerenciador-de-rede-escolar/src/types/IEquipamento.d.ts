export interface IEquipamento {
    id:                      number;
    titulo:                  string;
    descricao:               string;
    serie:                   string;
    flagDeteccaoTemperatura: boolean;
    alarmeAltaTemperatura:   number;
    flagSaida:               boolean;
    dtOnline:                Date;
    flagOnline:              boolean;
    ativo:                   string;
    dtSincronizacaoNuvem:    null;
    idUsuarioCadastro:       null;
    dtCadastro:              Date;
    idUsuarioAlteracao:      null;
    dtAlteracao:             Date;
    idUsuarioExclusao:       null;
    dtExclusao:              null;
    motivoExclusao:          null;
    idUltimoAcesso:          null;
    dtUltimoAcesso:          null;
    ipDevice:                string;
    idMarcaEquipamento:      null;
}
