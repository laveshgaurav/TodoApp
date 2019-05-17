var express=require('express');
var todocontroller = require('./controller/todocontroller');
var app = express();
//Setting template engine
app.set('view engine','ejs');

//static file
app.use('/assets',express.static('assets'))

// fire controller
todocontroller(app);



//listen to port
app.listen(3000);
console.log('Listening To Port 3000......');