import { AbstractException } from '../AbstractException'

export class UnauthorizedException extends AbstractException {

    public name = 'UnauthorizedException'
    public statusCode = 401
    public message: string

    constructor(message: string) {

        super()
        this.message = message

    }

}
