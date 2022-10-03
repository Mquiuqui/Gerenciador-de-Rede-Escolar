import { AbstractException } from '../AbstractException'

export class BadRequestException extends AbstractException {

    public name = 'BadRequestException'
    public statusCode = 400
    public message: string

    constructor(message: string) {

        super()
        this.message = message

    }

}
