var nodemailer = require('nodemailer');

// Create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'iCloud',
    auth: {
        user: 'jcvilap@icloud.com',
        pass: '1Centrino'
    },
    tls: {rejectUnauthorized: false}
});

module.exports.sendEmailNotifications = function(req, res){
    // Setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'jcvilap@icloud.com', // sender address
        to: 'jcvilap@gmail.com', // list of receivers
        subject: 'New Portfolio Comment from ' + req.body.name,
        text: 'Email: ' + req.body.email + '\n' +
        'Name: ' + req.body.name + '\n' +
        'Message: ' + req.body.message
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log("Error after sending the email: " + error);
            res.error = error;
        }else{
            console.log("Info after sending the email: " + info);
            res.msg = 'Message sent: ' + info.response;
        }
    });
};