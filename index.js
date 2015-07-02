var worker = require('node_helper');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'something@example.com', // Insert your gmail here
        pass: 'password'
    }
});

var params = worker.params;
var mailOptions = {
    from: params.email || 'Contact Form', // sender address
    to: 'receiver@example.com', // receiver address
    subject: 'Contact request', // Subject line
    text: params.text, // plaintext body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
        throw new Error(error); // Will trigger error on iron.io side
    } else {
        console.log('Message sent: ' + info.response);
    }
});
