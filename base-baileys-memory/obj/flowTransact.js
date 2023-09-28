const { addKeyword } = require('@bot-whatsapp/bot')

// Flow TRANSACT INI

    //Flow Reclamo POS INI
    const flowReclamoPos = addKeyword(['4'], {sensitive: true}).addAnswer('ACA VAN UNAS CUANTAS COSAS')
    //Flow Reclamo POS FIN

    //Flow Como Funcionan los POS INI
    const flowCierreDeLote = addKeyword(['3'], {sensitive: true}).addAnswer('Mandar Procedimiento')

    const flowDevolucion = addKeyword(['2'], {sensitive: true}).addAnswer('Mandar Procedimiento')

    const flowVenta = addKeyword(['1'], {sensitive: true}).addAnswer('Mandar Procedimiento')

    const flowUso = addKeyword(['1'], {sensitive: true})
    .addAnswer('Seleccione la opcion de interes y digtie el numero correspondiente')
    .addAnswer(
        [
            '1 👉 Venta',
            '2 👉 Devolución',
            '3 👉 Cierre de lotes', 
            '\n Escriba *fin* para volver al menú principal'
        ],
        )
        .addAnswer('Escriba *fin* para volver al menú principal',
        {capture: true},
        async (ctx, {endFlow, fallBack}) => {
        
            if (ctx.body == 'fin') {
                return endFlow({body: 'Escriba *inicio* para comenzar a chatear'})       
            }
            else if (ctx.body != '1' && ctx.body != '2' && ctx.body != '3'){
                return fallBack()
            }
        
        },
        [flowVenta, flowDevolucion, flowCierreDeLote]
    )

    const flowYaListo = addKeyword(['4'], {sensitive: true}).addAnswer('Mandar Procedimiento')

    const flowUsoPosIsa = addKeyword(['3'], {senstive: true}).addAnswer('Mandar Procedimiento')

    const flowConectarWifi = addKeyword(['2'], {senstive: true}).addAnswer('Mandar Procedimiento')


    const flowFuncionPos = addKeyword(['3'], {sensitive: true})
    .addAnswer('Seleccione la opcion de interes y digtie el numero correspondiente')
    .addAnswer(
        [
            '1 👉 Cómo usarlo?',
            '2 👉 Cómo conectarlo al wifi?',
            '3 👉 Cómo usar POS ISA?',
            '4 👉 Cómo saber si ya lo puedo usar?',
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
        [flowUso, flowConectarWifi, flowUsoPosIsa, flowYaListo]
    )
    //Flow Como Funcionan los POS FIN


    //Flow Solicitudes INI
    const flowPropina = addKeyword(['5'], {sensitive: true}).addAnswer('Mandar Procedimiento')

    const flowAmbasMonedas = addKeyword(['4'], {sensitive: true}).addAnswer('Mandar Procedimiento')

    const flowCuotas = addKeyword(['3'], {sensitive: true}).addAnswer('Mandar Procedimiento')

    const flowVentaSin = addKeyword(['2'], {sensitive: true}).addAnswer('Mandar Procedimiento')

    const flowTarjeta = addKeyword(['1'], {sensitive: true}).addAnswer('Mandar Procedimiento')

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
const flowContraAdminWeb = addKeyword(['2'], {sensitive: true}).addAnswer('Mandar Procedimiento')

const flowIngresarAdminWeb = addKeyword(['1'], {sensitive: true}).addAnswer('Mandar Procedimiento')

const flowAdminWeb = addKeyword(['1'], {sensitive: true})
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