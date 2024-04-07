require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.APP_PORT;


app.get('/', function(req, res){
    res.send('Defaussslt Route');

});

app.get('/about', function(req, res){
    res.send('About');

});

app.listen(PORT, function(){
    console.log('server is runing on port '+PORT);
});