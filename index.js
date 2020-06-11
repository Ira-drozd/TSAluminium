const express = require("express");
const exphbs = require('express-handlebars');
const pagesRoutes = require('./routes/pages');

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);//для рендеринга страниц
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(pagesRoutes);
app.use(express.static( "public"));


app.listen(PORT, function () {
    console.log('Server has been started...')
})
