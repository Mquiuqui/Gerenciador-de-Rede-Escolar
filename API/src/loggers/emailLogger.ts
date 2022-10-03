import { format, createLogger, transports } from 'winston'
import 'winston-daily-rotate-file'
import apiConfig from '../api.config.json'

const { timestamp, label, printf } = format
const pattern = printf(({ level, message, label, timestamp }) => `${timestamp} [${level}] ${label} : ${message}`)

const transport = new transports.DailyRotateFile({
    filename: `logs/request-response/${process.env.LOG_LABEL}-%DATE%.log`,
    datePattern: 'DD-MM-YYYY',
    maxFiles: '7' // Maximo de n arquivos
})

const logger = createLogger({
    format: format.combine(
        label({ label: 'email' }),
        timestamp(),
        pattern
    ),
    transports: [transport],
})

export const saveEmailLog = (msg: string | object) => {

    apiConfig.loggers && logger.info(JSON.stringify(msg))

}
