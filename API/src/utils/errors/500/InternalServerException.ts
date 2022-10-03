import { AbstractException } from '../AbstractException'

export class InternalServerException extends AbstractException {

    public name = 'InternalServerException'
    public statusCode = 500
    public message: string

    constructor(message: string) {

        super()
        this.message = message

    }

}
