var express = require('express'),
    app     = express();

app.listen(3000, function(){
   console.log('listening on port 3000');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});