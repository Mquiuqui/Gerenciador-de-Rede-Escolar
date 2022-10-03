import nodemailer from 'nodemailer'
import { Email } from '../types/Email'
import { saveEmailLog } from '../loggers/emailLogger'
import conf from '../api.config.json'

export default class EmailService {

    public static async sendOAuth2(email: Email): Promise<boolean> {

        const CLIENT_ID = process.env.CLIENT_ID
        const CLIENT_SECRET = process.env.CLIENT_SECRET
        // 'https://developers.google.com/oauthplayground' //? SITE PARA GERAR OS TOKENS
        const REFRESH_TOKEN = process.env.REFRESH_TOKEN

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL_USER,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
            }
        })

        if (!conf.sendEmails) return true

        try {

            await transporter.sendMail(email)
            saveEmailLog(`Email enviado para '${email.to}'`)
            return true

        } catch (error) {

            saveEmailLog({ msg: `Erro ao enviar email para '${email.to}'`, error })
            return false

        }

    }

    public static async send(email: Email): Promise<boolean> {

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: false,
            requireTLS: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_SENHA
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        if (!conf.sendEmails) return true

        try {

            await transporter.sendMail(email)
            saveEmailLog(`Email enviado para '${email.to}'`)
            return true

        } catch (error) {

            saveEmailLog({ msg: `Erro ao enviar email para '${email.to}'`, error })
            return false

        }

    }

}
