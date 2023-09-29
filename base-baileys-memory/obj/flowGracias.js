const { addKeyword } = require('@bot-whatsapp/bot')

flowGracias = addKeyword(['gracias'], {sensitive: true})
.addAnswer('Gracias por comunicarte con soporte tecnico')
.addAnswer('Por mas informacion comuniquese a soporte@nad.uy o al 2917 0075 int 3')
.addAnswer('Si quiere volver a chatear escriba *inicio*')    

module.exports = flowGracias