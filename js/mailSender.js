var api_key = '6e4229ec54599f8f3f7f414f899f59ef-7efe8d73-18a835e5';
var DOMAIN = 'sandboxeb135bbcef484917b86633a386ec3aa9.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});
var emailAdmi = 'ame.monroy@gmail.com';
var emailUser = 'ame.monroy@gmail.com';

var data = {
  from: emailAdmi,
  to: emailUser,
  subject: 'Prueba correo',
  text: 'Testing some Mailgun awesomness!'
};

const mailSender = (data) =>
mailgun.messages().send(data, function (error, body) {
    if(error){
    console.log(error);
  };
  console.log(body);
});


module.exports = mailSender;
