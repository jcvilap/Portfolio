var nodemailer = require('nodemailer');

// Create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'service',
    auth: {
        user: 'email',
        pass: 'pass'
    }
});

module.exports.sendEmailNotifications = function(req, res){
    // Setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'email', // sender address
        to: 'email', // list of receivers
        subject: 'New Portfolio Comment from ' + req.body.name,
        text: 'Email: ' + req.body.email + '\n' +
              'Name: ' + req.body.name + '\n' +
              'Message: ' + req.body.message
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            res.error = error;
        }else{
            res.msg = 'Message sent: ' + info.response;
        }
    });
};