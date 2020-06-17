const express = require("express");
//const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');

const pagesRoutes = require('./routes/pages');//
const nodemailer = require('./nodemailer/index');//


const PORT = process.env.PORT || 3000;

const app = express();
//const urlencodedParser = bodyParser.urlencoded({extended: false});
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);//для рендеринга страниц
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(pagesRoutes);//
app.use(nodemailer);//
app.use(express.static("public"));


app.listen(PORT, function () {
    console.log('Server has been started...')
})
