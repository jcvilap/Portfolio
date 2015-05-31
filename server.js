var express = require('express'),
    app     = express();

app.listen(8000, function(){
   console.log('listening on port 8000');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});

app.use('/', express.static(__dirname + '/'));