require('dotenv').config()
const env = process.env.NODE_ENV.toUpperCase();
const {
    [`AMM_EMAIL_${env}`]: emailUser,
    [`AMM_PASS_${env}`]: emailPass
} = process.env;

const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
            <li>Name: ${req.body.name}</li>
            <li>Phone: ${req.body.phone}</li>
            <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message:</h3>
            <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: emailUser,
                pass: emailPass
            } 
            // hide authentication
        });
        let mailOptions = {
            from: req.body.email,
            replyTo: req.body.email,
            to: emailUser,
            subject: 'Partnership Inquiry from Alex Makes Meals Website',
            text: req.body.message,
            html: htmlEmail
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }
            console.log('Message sent: %s', info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})