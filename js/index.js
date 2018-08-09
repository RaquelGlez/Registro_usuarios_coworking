const express = require('express');
const mailSender = require("./mailSender.js");

const emailAdmi = 'ame.monroy@gmail.com';
const emailUser = 'ame.monroy@gmail.com';
const app = express();

const data = {
    from: emailAdmi,
    to: emailUser,
    subject: 'Prueba correo',
    text: 'Testing some Mailgun awesomness!'
};

app.get('/registrarVisita', function (req, res) {
    registerToDB();
    mailSender(data);
    res.send('Correo enviado')
  });
  
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });

