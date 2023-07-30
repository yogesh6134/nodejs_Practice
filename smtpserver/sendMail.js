const nodemailer = require('nodemailer')
const sendMail = async(req, res) => {
    // nodemailer.createTestAccount((err, account) => {
    //     if (err) {
    //         console.error('Failed to create a testing account. ' + err.message);
    //         return process.exit(1);
    //     }
    
    //     console.log('Credentials obtained, sending message...');
    const transporter = await nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'jamaal51@ethereal.email',
            pass: '4ppPHHaSDVBp88p1zT'
        }
    });
    let info  = await transporter.sendMail({
        from: 'Yogesh <thakuryogesh500@gmail.com>',
        to: 'yogesh62652@gmail.com',
        subject: 'Nodemailer is unicode friendly ✔',
        text: 'Hello to myself!',
        html: '<b>Hello to myself!</b>'
    });

        console.log('Message sent: %s', info.messageId, info);
        res.json(info)
}

module.exports = sendMail