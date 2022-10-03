export class RetornoService {

    public static success<T>(result: T[] | T) {

        const Return = {
            flagErro: false,
            listaMensagens: [],
            listaResultados: result
        }

        return Return

    }

    public static error(error: unknown) {

        const Return = {
            flagErro: true,
            listaMensagens: [] as string[],
            listaResultados: []
        }

        Return.listaMensagens.push(error instanceof Error ? error.message : error as string)
        return Return

    }

    public static message(msg: string) {

        const Return = {
            flagErro: true,
            listaMensagens: [] as string[],
            listaResultados: []
        }

        Return.listaMensagens.push(msg)
        return Return

    }

}
