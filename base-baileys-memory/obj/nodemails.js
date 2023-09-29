require('dotenv').config();
const nodemailer = require('nodemailer');
// Configuración de nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

const enviarCorreoReclamo = (tipo ,mensaje, remitente) => {
    let mailOptions = {
        from: process.env.GMAIL_USER,
        to: 'pedroporro579@gmail.com',
        subject: `Nuevo Reclamo desde WhatsApp Bot ${tipo}`,
        text: `Mensaje: ${mensaje}\nRemitente: ${remitente}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Correo enviado: ' + info.response);
        }
    });
};


module.exports = enviarCorreoReclamo