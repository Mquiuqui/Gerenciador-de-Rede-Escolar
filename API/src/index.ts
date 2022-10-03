
import cors from 'cors'
import * as dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { io } from 'socket.io-client'
import { AppDataSource } from './connection'
// import { AppDataSource } from './connection'
import { controllers } from './modules'
import { Routes } from './routes'
import { AbstractException } from './utils/errors/AbstractException'
import { limitRate } from './utils/limitRate'
import { RetornoService } from './utils/RetornoService'

async function run() {

    dotenv.config()
    controllers

    const app = express()
    app.use(helmet())
        .use(cors())
        .use(morgan('dev'))
        .use(express.json())
        .use(express.urlencoded({ extended: true }))
        .use(limitRate)

    const PORT = process.env.PORT || 3333

    await AppDataSource.initialize()

    Routes.forEach(route => {

        (app as any)[route.method](route.route, async (req: Request, res: Response, next: NextFunction) => {

            const result = await (new (route.controller as any))[route.action](req, res, next)
            const isObject = typeof result === 'object'
            const isCustomException = result instanceof AbstractException

            if (isObject && 'dontSend' in result) return //* Não retorna nada pois é esperado que a controller ja tenha retornado
            if (isObject && 'flagErro' in result) return res.status(500).send(result) //* Já veio no padrão de retorno

            if (isCustomException) return res.status(result.statusCode).send(RetornoService.error(result))
            return result instanceof Error ? res.status(200).send(RetornoService.error(result)) : res.status(200).send(RetornoService.success(result))

        })

    })

    app.listen(PORT)
    //eslint-disable-next-line no-console
    console.log(`🔥 Express server has started on http://localhost:${PORT} 🔥`)

}

new Promise(resolve => setTimeout(resolve, 0)).then(() => run())
