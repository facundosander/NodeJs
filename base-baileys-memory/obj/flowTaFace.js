const { addKeyword } = require('@bot-whatsapp/bot')
const flowCertificado = require('./flowCertificado')
const flowCaes = require('./flowCaes')
const { flowGracias, flowGraciasContactando } = require('./flowGracias');
const enviarCorreoReclamo = require('./nodemails');

//Flow TaFace INI


    const flowReclamoTaFace = addKeyword(['4'], {sensitive: true})
    .addAnswer('Por favor denos una breve explicacion de lo que le esta sucediendo, tambien nos va ser de ayuda cualquier tipo de informacion extra como videos o fotos. Lo pondremos en contacto con el primer Tecnico disponible'
    ,{capture: true},
    async (ctx, {gotoFlow}) => {
        enviarCorreoReclamo('TaFace',ctx.body, ctx.from)
        await gotoFlow(flowGraciasContactando)
    }
)


    //Flow Ingresar TaFace INI
        const flowPrimeraVez = addKeyword(['1'], {sensitive: true}).addAnswer('Mandar Procedimiento')

        const flowContraTaface = addKeyword(['2'], {sensitive: true}).addAnswer('Mandar Procedimiento')

    const flowIngresarTaFace = addKeyword(['1'], {sensitive: true})
    .addAnswer('Seleccione la opcion de interes y digtie el numero correspondiente')
    .addAnswer(
        [
            '1 👉 Ingresar por primera vez',
            '2 👉 Olividé mi contraseña',
            '\n Escriba *fin* para volver al menú principal'
        ],
        {capture: true},
        async (ctx, {endFlow, fallBack}) => {
        
            if (ctx.body == 'fin') {
                return endFlow({body: 'Escriba *inicio* para comenzar a chatear'})       
            }
            else if (ctx.body != '1' && ctx.body != '2'){
                return fallBack()
            }
        
        },
        [flowPrimeraVez, flowContraTaface]
    )
//Flow Ingresar TaFace FIN


const flowTaFace = addKeyword(['2'], {sensitive: true})
.addAnswer('Seleccione la opcion de interes y digtie el numero correspondiente')
.addAnswer(
    [
        '1 👉 Ingresar a TaFace',
        '2 👉 Certificado Digital',
        '3 👉 CAES',
        '4 👉 Tengo un Problema en TaFace',  
        '\n Escriba *fin* para volver al menú principal',
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
    [flowIngresarTaFace, flowCertificado, flowCaes, flowReclamoTaFace]
)

//Flow TaFace FIN

module.exports = flowTaFace