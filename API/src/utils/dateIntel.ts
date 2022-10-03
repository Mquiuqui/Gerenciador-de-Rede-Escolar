export default function dataIntel() {
    //@ts-ignore
    return `${new Date(new Date().getTime() - 1.08e+7).toISOString().split('T')[0]} ${new Date().toTimeString().split('GMT')[0].trim()}`

}