const { addKeyword } = require('@bot-whatsapp/bot')
const flowCertificado = require('./flowCertificado')
const flowCaes = require('./flowCaes')
const { flowGracias, flowGraciasContactando } = require('./flowGracias');
const enviarCorreoReclamo = require('./nodemails');



const flowReclamoCaja = addKeyword(['1'], {sensitive: true})
.addAnswer('Por favor denos una breve explicacion de lo que le esta sucediendo, tambien nos va ser de ayuda cualquier tipo de informacion extra como videos fotos. lo pondremos en contacto con el primer Tecnico disponible'
,{capture: true},
async (ctx, {gotoFlow}) => {
    enviarCorreoReclamo('NadCaja',ctx.body, ctx.from)
    await gotoFlow(flowGraciasContactando)
}
)

const flowNadCaja = addKeyword(['4'], {sensitive: true})
.addAnswer('Seleccione la opcion de interes y digtie el numero correspondiente')
.addAnswer(
    [
        '1 👉 Tengo un problema en Nad Caja',
        '2 👉 Certificado Digital',
        '3 👉 CAES',
        '\n Escriba *fin* para volver al menú principal'
    ],
    {capture: true},
    async (ctx, {endFlow, fallBack}) => {
    
        if (ctx.body == 'fin') {
            return endFlow({body: 'Escriba *inicio* para comenzar a chatear'})       
        }
        else if (ctx.body != '1' && ctx.body != '2' && ctx.body != '3' && ctx.body != '4'){
            return fallBack()
        }
    
    },
    [flowReclamoCaja, flowCertificado, flowCaes,]
)



module.exports = flowNadCaja