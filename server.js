var express      = require('express'),
    emailService = require('./server/emailService'),
    bodyParser   = require('body-parser');
    app          = express();

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});

// REST API
app.post('/mail', emailService.sendEmailNotifications);

app.listen(8000, function(){
    console.log('listening on port 8000');
});