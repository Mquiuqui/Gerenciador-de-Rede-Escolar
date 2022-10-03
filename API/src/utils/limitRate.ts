import { NextFunction, Request, Response } from 'express'
import { RateLimiterMemory } from 'rate-limiter-flexible'

export async function limitRate(req: Request, res: Response, next: NextFunction) {

    const limiter = new RateLimiterMemory({
        points: 10, //* Quantas requisições por IP
        duration: 15, //* Segundos
    })

    try {

        await limiter.consume(req.ip)
        return next()

    } catch (err) {

        return res.status(429).json({ message: 'Too many requests', code: 429 })

    }

}
