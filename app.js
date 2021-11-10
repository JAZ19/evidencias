const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app =express();
const routes = require('./routes/index');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use((req,res,next) => {
                          console.log(`Texto : ${req.url} - ${req.method}`);
                          next();
                        });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(routes);


app.listen(3000,()=>console.log('Servidor corriendo puerto 3000'));
