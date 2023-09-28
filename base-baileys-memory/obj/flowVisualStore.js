const { addKeyword } = require('@bot-whatsapp/bot')
const flowCertificado = require('./flowCertificado')
const flowCaes = require('./flowCaes')


const flowReclamoVSS = addKeyword(['1'], {sensitive: true}).addAnswer('Comnunicarse a soporte@nad.uy o al tel 2917 0075 int 3')

const flowVisualStore= addKeyword(['3'], {sensitive: true})
.addAnswer('Seleccione la opcion de interes y digtie el numero correspondiente')
.addAnswer(
    [
        '1 👉 Tengo un problema en Visual Store',
        '2 👉 Certificado Digital',
        '3 👉 CAES',
        '\n Escriba *fin* para volver al menú principal'
    ],
    {capture: true},
    async (ctx, {endFlow, fallBack}) => {
    
        if (ctx.body == 'fin') {
            return endFlow({body: 'Escriba *inicio* para comenzar a chatear'})       
        }
        else if (ctx.body != '1' && ctx.body != '2' && ctx.body != '3'){
            return fallBack()
        }
    
    },
    [flowReclamoVSS, flowCertificado, flowCaes,]
)



module.exports = flowVisualStore