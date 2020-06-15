const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');

const pagesRoutes = require('./routes/pages');
const mailer = require("./nodemailer/nodemailer")


const PORT = process.env.PORT || 3000;

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);//для рендеринга страниц
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(pagesRoutes);
app.use(express.static("public"));

app.post("/contacts", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);

    console.log(request.body)

    function check() {
        let tel = request.body.tel;
        let email = request.body.email;
        let message = request.body.message;

        if (!tel || !email || !message) return {status: 2, message: "Еmpty fields"}

        const sendMessage = {
            to: `TSAluminium@yandex.by`,
            subject: `Сообщение от ${request.body.email}`, // Subject line
            //text: `Hello, this is just text ${request.body.email} ${request.body.password}`, // plain text body
            html: `
            <table><tbody>
    <tr style="background-color: #f8f8f8;">
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Телефон:</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>${request.body.tel}</td>
    </tr>
    <tr style="background-color: #f8f8f8;">
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Email:</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>${request.body.email}</td>
    </tr>
    <tr style="background-color: #f8f8f8;">
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Сообщение:</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>${request.body.message}</td>
    </tr></tbody>
            </table>
            `}

        mailer(sendMessage);

        return {status: 1, message: "ok"}

    }
    response.send(check());
});


app.listen(PORT, function () {
    console.log('Server has been started...')
})
