const { addKeyword } = require('@bot-whatsapp/bot')
const { flowGracias, flowGraciasContactando } = require('./flowGracias');
const enviarCorreoReclamo = require('./nodemails');

const flowCargarCaes = addKeyword(['1'], {sensitive: true})
.addAnswer(' ', {media: 'https://i.imgur.com/j5UPQSX.png',})
.addAnswer(' ', {media: 'https://i.imgur.com/xeN2RZQ.png',})
.addAnswer('Aquí tiene una pequeña guia', {media: 'https://i.imgur.com/pzfPy6O.png',})
.addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})

const flowSolicitudCaes = addKeyword(['2'], {sensitive: true})
.addAnswer('La solicitud de caes es un proceso de DGI, comuniquese con su contador o estudio contable para asesorarse')
.addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})


const flowCaes = addKeyword(['3'], {sensitive: true})
.addAnswer('Seleccione la opcion de interes y digtie el numero correspondiente')
.addAnswer(
    [
        '1 👉 Cargar Caes',
        '2 👉 Cómo solicitar caes',  
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
    [flowCargarCaes, flowSolicitudCaes]
)

module.exports = flowCaes