export interface IApiReturn<T> {
    flagErro: boolean;
    listaMensagens: string[];
    listaResultados: T;
}
