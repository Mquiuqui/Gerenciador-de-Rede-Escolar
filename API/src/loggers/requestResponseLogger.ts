import { format, createLogger, transports } from 'winston'
import 'winston-daily-rotate-file'
import apiConfig from '../api.config.json'

const { timestamp, label, printf } = format

const pattern = printf(({ level, message, label, timestamp }) => {

    const date = new Date(timestamp).toLocaleString('en-GB', { timeZone: 'America/Sao_Paulo' })
    return `<br> <b>${date}</b> <span style="color:${level === 'info' ? '#003900' : '#FF0000'}"> [${level}] ${label} : ${message}</span> </br>`

})

const transport = new transports.DailyRotateFile({
    filename: `logs/request-response/${process.env.LOG_LABEL}-%DATE%.log`,
    datePattern: 'DD-MM-YYYY',
    maxFiles: '7' // Maximo de n arquivos
})

const logger = createLogger({
    format: format.combine(
        label({ label: 'request-response' }),
        timestamp(),
        pattern
    ),
    transports: [transport],
})

export const saveRequestResponseLog = (msg: string, type: 'info' | 'error', request: any, response: any) => apiConfig.loggers && logger[type](JSON.stringify({ msg, request, response }))
