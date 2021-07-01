export default function (req, res){
    require('dotenv').config()
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'login',
            user: 'blakedegrawbeats@gmail.com',
            pass: process.env.password
        },
        secure: true,
    })
    const mailData = {
        from: 'blakedegrawbeats@gmail.com',
        to: 'bbdegraw@gmail.com',
        subject: `Message from ${req.body.name}`,
        text: req.body.message + ' | sent from: ' + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if(err){
            console.log(err)
        } else{
            console.log(info)
        }
    })
    res.status(200)
}