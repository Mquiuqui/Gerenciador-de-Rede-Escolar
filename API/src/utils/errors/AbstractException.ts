export abstract class AbstractException extends Error {

    abstract name: string;
    abstract statusCode: number;
    abstract message: string;

}
