const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

// sgMail.send({
//     to: 'adrianqvd@gmail.com',
//     from: 'adrianqvd@gmail.com',
//     subject: 'test send mail to node.js',
//     text: 'hola test prueba'
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'adrianqvd@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'adrianqvd@gmail.com',
        subject: 'Cancel account',
        text: `Please, ${name}. Why you cancel the account?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
