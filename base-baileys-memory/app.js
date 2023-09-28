const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const flowTransact = require('./obj/flowTransact')
const flowTaFace = require('./obj/flowTaFace')
const flowVisualStore = require('./obj/flowVisualStore')
const flowNadCaja = require('./obj/flowNadCaja')

// Flow PRINCIPAL INI
const flowPrincipal = addKeyword(['pepito', 'inicio'])
    .addAnswer(`🙌 Hola bievenido al soporte tecnico automatizado `)
    .addAnswer(
        [
            'Selecciona el producto de interes y digite el numero correspondiente',
            '1 👉 TRANSACT / POS',
            '2 👉 TaFace',
            '3 👉 Visual Store',
            '4 👉 Nad Caja',
        ],
        {capture: true},
        async (ctx, {gotoFlow, fallBack}) => {

            if (ctx.body == 'inicio') {
                await gotoFlow(flowPrincipal);       
            }
            else if (ctx.body != '1' && ctx.body != '2' && ctx.body != '3' && ctx.body != '4'){
                return fallBack()
            }
        },
        [flowTransact, flowTaFace, flowVisualStore, flowNadCaja]
    )
// FLOW PRINCIPAL FIN

module.exports = flowPrincipal

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
