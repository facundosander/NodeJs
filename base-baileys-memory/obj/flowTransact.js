const { addKeyword } = require('@bot-whatsapp/bot')
const flowGracias = require('./flowGracias')
// Flow TRANSACT INI

    //Flow Reclamo POS INI
    const flowReclamoPos = addKeyword(['4'], {sensitive: true}).addAnswer('Por favor, mande un *video del problema* que está teniendo con el pos o *indicaciones de que le está sucediendo*. lo contactaremos con el primer Tecnico disponible')
    .addAnswer('Si quiere volver a chatear escriba *inicio*')
    //Flow Reclamo POS FIN

    //Flow Como Funcionan los POS INI
    const flowApagar = addKeyword(['5'], {sensitive: true})
    .addAnswer('Aquí tiene una pequeña guia', {media: 'https://i.imgur.com/j4nSlww.png',})
    .addAnswer('Tambien le dejamos un video de como hacerlo: https://youtu.be/oM5SAOBkVYY')
    .addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})
 

    const flowReimpresion = addKeyword(['4'], {sensitive: true})
    .addAnswer('Aquí tiene una pequeña guia', {media: 'https://i.imgur.com/t3J5YRA.png',})
    .addAnswer('Tambien le dejamos un video de como hacerlo: https://youtu.be/HV8s1D9HN-Q')
    .addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})

    const flowCierreDeLote = addKeyword(['3'], {sensitive: true})
    .addAnswer('Aquí tiene una pequeña guia', {media: 'https://i.imgur.com/xcHBFXH.png',})
    .addAnswer('Tambien le dejamos un video de como hacerlo: https://youtu.be/C3SmZgL-M28')
    .addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})




    const flowDevolucion = addKeyword(['2'], {sensitive: true})
    .addAnswer('Aquí tiene una pequeña guia', {media: 'https://i.imgur.com/uCgUf3l.png',})
    .addAnswer('Tambien le dejamos un video de como hacerlo: https://youtu.be/g8qfwjWfg4k')
    .addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})



    const flowVenta = addKeyword(['1'], {sensitive: true})
    .addAnswer('Aquí tiene una pequeña guia',{media: 'https://i.imgur.com/cC0aZ6L.png',})
    .addAnswer('Tambien le dejamos un video de como hacerlo: https://youtu.be/g8qfwjWfg4k')
    .addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})


    const flowUso = addKeyword(['1'], {sensitive: true})
    .addAnswer('Seleccione la opcion de interes y digtie el numero correspondiente')
    .addAnswer(
        [
            '1 👉 Venta',
            '2 👉 Devolución',
            '3 👉 Cierre de lotes', 
            '4 👉 reimpresion ultimo cierre / reimpresion ultima venta',
            '5 👉 encender y apagar',
            '\n Escriba *fin* para volver al menú principal'
        ],
        {capture: true},
        async (ctx, {endFlow, fallBack}) => {
        
            if (ctx.body == 'fin') {
                return endFlow({body: 'Escriba *inicio* para comenzar a chatear'})       
            }
            else if (ctx.body != '1' && ctx.body != '2' && ctx.body != '3' && ctx.body != '4' && ctx.body != '5'){
                return fallBack()
            }
        
        },
        [flowVenta, flowDevolucion, flowCierreDeLote, flowReimpresion, flowApagar]
    )

    const flowConsejos = addKeyword(['4'], {sensitive: true})
    .addAnswer('Aquí tiene una pequeña guia',{media: 'https://i.imgur.com/lupiQsU.png',})
    .addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})


    const flowUsoPosIsa = addKeyword(['3'], {senstive: true}).addAnswer('Mandar Procedimiento')

    const flowConectarWifi = addKeyword(['2'], {senstive: true})
    .addAnswer('Aquí tiene una pequeña guia',{media: 'https://i.imgur.com/udFhsQH.png',})
    .addAnswer('Tambien le dejamos un video de como hacerlo: https://youtu.be/QvN_AlyGbnA')
    .addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})



    const flowFuncionPos = addKeyword(['3'], {sensitive: true})
    .addAnswer('Seleccione la opcion de interes y digtie el numero correspondiente')
    .addAnswer(
        [
            '1 👉 Cómo usarlo?',
            '2 👉 Cómo conectarlo al wifi/3G?',
            '3 👉 Cómo usar POS ISA?',
            '4 👉 ¡Consejos sobre el buen uso del aparato!',
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
        [flowUso, flowConectarWifi, flowUsoPosIsa, flowConsejos]
    )
    //Flow Como Funcionan los POS FIN


    //Flow Solicitudes INI
    const flowPropina = addKeyword(['5'], {sensitive: true})
    .addAnswer(
        [
            'Para solicitar la habilitacion de propina debe mandar un mail a soporte@nad.uy con los siguientes datos: ',
            '\n*-Asunto*: Habilitar propina',
            '*-RUT*',
            '*-RAZON SOCIAL*',
            '*-Numero de Terminal* (Si son todas las de la empresa espesificarlo)',
            '\nEl numero de terminal lo podra encontrar en cualquier voucher emitido por el pos como se ve en la foto',


        ],{media: 'https://i.imgur.com/JhKUjll.png',}
    )
    .addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})


    const flowAmbasMonedas = addKeyword(['4'], {sensitive: true})
    .addAnswer(
        [
            'Para solicitar la habilitación de ambas monedas debe mandar un mail a soporte@nad.uy con los siguientes datos: ',
            '\n*-Asunto*: Habilitar ambas monedas',
            '*-RUT*',
            '*-RAZON SOCIAL*',
            '*-Numero de Terminal* (Si son todas las de la empresa espesificarlo)',
            '\nEl numero de terminal lo podra encontrar en cualquier voucher emitido por el pos como se ve en la foto',


        ],{media: 'https://i.imgur.com/JhKUjll.png',}
    )
    .addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})

    const flowCuotas = addKeyword(['3'], {sensitive: true})
    .addAnswer(
        [
            'Para solicitar la habilitación de cuotas debe mandar un mail a soporte@nad.uy con los siguientes datos: ',
            '\n*-Asunto*: Habilitar cuotas',
            '*-RUT*',
            '*-RAZON SOCIAL*',
            '*-Numero de Terminal* (Si son todas las de la empresa espesificarlo)',
            '\nEl numero de terminal lo podra encontrar en cualquier voucher emitido por el pos como se ve en la foto',


        ],{media: 'https://i.imgur.com/JhKUjll.png',}
    )
    .addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})

    const flowVentaSin = addKeyword(['2'], {sensitive: true})
    .addAnswer(
        [
            'Para solicitar la habilitación de ventas sin tarjeta presente debe mandar un mail a soporte@nad.uy con los siguientes datos: ',
            '\n*-Asunto*: Habilitar ventas sin tarjeta presente',
            '*-RUT*',
            '*-RAZON SOCIAL*',
            '*-Sellos que quiera habilitar* (ej. Visa, MasterCarad, etc,)',
            '*-Numero de Terminal* (Si son todas las de la empresa espesificarlo)',
            '\nEl numero de terminal lo podra encontrar en cualquier voucher emitido por el pos como se ve en la foto',


        ],{media: 'https://i.imgur.com/JhKUjll.png',}
    )
    .addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})

    const flowTarjeta = addKeyword(['1'], {sensitive: true})
    .addAnswer(
        [
            'Para solicitar la alta de una nueva tarjeta debe mandar un mail a soporte@nad.uy con los siguientes datos: ',
            '\n*-Asunto*: Habilitar ventas sin tarjeta presente',
            '*-RUT*',
            '*-RAZON SOCIAL*',
            '*-Sellos que quiera habilitar* (ej. Visa, MasterCarad, etc,)',
            '*-Codigo de comercio* brindado por el adquirente',
            '*-Numero de Terminal* (Si son todas las de la empresa espesificarlo)',
            '\nEl numero de terminal lo podra encontrar en cualquier voucher emitido por el pos como se ve en la foto',
        ],{media: 'https://i.imgur.com/JhKUjll.png',}
    )
    .addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})

    const flowSolicitudes = addKeyword(['2'], {sensitive: true})
    .addAnswer('Seleccione la opcion de interes y digtie el numero correspondiente')
    .addAnswer(
        [
            '1 👉 Nueva Tarjeta',
            '2 👉 Habilitar Venta sin Tarjeta Presente',
            '3 👉 Habilitar Cuotas',
            '4 👉 Habilitar ambas monedas',
            '5 👉 Habilitar Propina',
            '\n Escriba *fin* para volver al menú principal'
        ],
        {capture: true},
        async (ctx, {endFlow, fallBack}) => {
        
            if (ctx.body == 'fin') {
                return endFlow({body: 'Escriba *inicio* para comenzar a chatear'})       
            }
            else if (ctx.body != '1' && ctx.body != '2' && ctx.body != '3' && ctx.body != '4' && ctx.body != '5'){
                return fallBack()
            }
        
        },
        [flowTarjeta, flowVentaSin, flowCuotas, flowAmbasMonedas, flowPropina]
    )
    //Flow Solicitudes FIN


//Flow AdminWeb INI
const flowContraAdminWeb = addKeyword(['2'], {sensitive: true})
.addAnswer('En caso de haber olvidado su contraseña debe seleccionar la opción *¿Te olvidaste la contraseña?*', {media: 'https://i.imgur.com/lwAdCoX.png',})
.addAnswer('Se desplegará el sugiente menú donde debe completar los datos, si están correctos, se le enviará la nueva contraseña a su casilla de mail', {media: 'https://i.imgur.com/dZLspX8.png',})
.addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})



const flowIngresarAdminWeb = addKeyword(['1'], {sensitive: true})
.addAnswer(' ', {media: 'https://i.imgur.com/SWx9xzm.png',})
.addAnswer(' ', {media: 'https://i.imgur.com/3Kcgjo8.png',})
.addAnswer('Luego de completar los datos con el Rut, nombre, apellido y mail, le llegara un mail con la contraseña. Luego ingrese a https://adminweb.transact.com.uy/ nuevmanete para ingresar con su mail y la contraseña')
.addAnswer('¿Le ha sido útil esta información?', {capture: true}, async (ctx, {gotoFlow}) => {gotoFlow(flowGracias)})

const flowAdminWeb = addKeyword(['1'], {sensitive: true})
.addAnswer(' ', {media: 'https://i.imgur.com/mbVbeR6.png',})
.addAnswer('Ingresar a AdminWeb desde aquí: https://adminweb.transact.com.uy/')
.addAnswer('Seleccione la opcion de interes y digtie el numero correspondiente')
.addAnswer(
    [
        '1 👉 Ingresar por primera vez',
        '2 👉 Olvidé mi contraseña',
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
    [flowIngresarAdminWeb, flowContraAdminWeb]
)

//Flow AdminWeb FIN


const flowTransact = addKeyword(['1'], {sensitive: true})
.addAnswer('Seleccione la opcion de interes y digtie el numero correspondiente')
.addAnswer(
    [
        '1 👉 AdminWeb',
        '2 👉 Solicitudes',
        '3 👉 Como funcionan los POS',
        '4 👉 Tengo un problema con mi POS',
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
[flowAdminWeb, flowSolicitudes, flowFuncionPos, flowReclamoPos])

// Flow TRANSACT FIN

module.exports = flowTransact