const { addKeyword } = require('@bot-whatsapp/bot')
const { flowGracias, flowGraciasContactando } = require('./flowGracias');



const flowGenerarCertificado = addKeyword(['1','2'], {sensitive: true})
.addAnswer('Aquí tiene una pequeña guia', {media: 'C:/Users/facun/OneDrive/Escritorio/Manual Certificados.pdf',})
.addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})

const flowCertificado = addKeyword(['2'], {sensitive: true})
.addAnswer('Seleccione la opcion de interes y digtie el numero correspondiente')
.addAnswer(
    [
        '1 👉 Se me está por vencer el certificado digital',
        '2 👉 Como generar certficado Digital', 
        '\n Escriba *fin* para volver al menú principal',
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
    [flowGenerarCertificado]
)

module.exports = flowCertificado