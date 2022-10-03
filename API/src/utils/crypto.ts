import cryptojs from 'crypto-js'

export default function crypto(text: string): string {

    const start = process.env.HASH_SECRET_KEY
    const senhaUtf16 = cryptojs.enc.Utf16LE.parse(start + text)
    const hash = cryptojs.SHA512(senhaUtf16)
    return hash.toString(cryptojs.enc.Hex)

}
