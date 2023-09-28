const { addKeyword } = require('@bot-whatsapp/bot')


const flowCargarCaes = addKeyword(['1'], {sensitive: true}).addAnswer('Mandar Procedimiento')

const flowSolicitudCaes = addKeyword(['2'], {sensitive: true}).addAnswer('Mandar Procedimiento')

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