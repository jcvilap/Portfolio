var express = require('express'),
    app     = express();

app.listen(80, function(){
   console.log('listening on port 80');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});