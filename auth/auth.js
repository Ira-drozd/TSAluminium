const express = require('express');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt-nodejs');
//db
//  const models = require('../models');
const User = require('../models/user');

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json())

// POST is authorized
app.post("/api/registration", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body)

    const login = request.body.login;
    const name = request.body.name;
    const password = request.body.password;
    const passwordConfirm = request.body.passwordConfirm;

    if (!login) {
        response.json({
            status: 2,
            message: "Еmpty fields"
        })
    } else {

        bcrypt.hash(password, null, null, (err, hash) => {
            User.create({
                login,
                name,
                password: hash
            })
                .then(user => {
                    console.log(user);
                    request.session.userId = user.id;//
                    request.session.userLogin = user.login;//
                    request.session.userName = user.name;//
                    response.json({
                        status: 1,
                        message: "ok"
                    })
                })
                .catch(err => {
                    console.log(err);
                    response.json({
                        ok: false,
                        error: 'Error database!'
                    });
                });
        });


    }


});

app.post("/api/authentication", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body)

    const login = request.body.login;
    const password = request.body.password;

    if (!login) {
        response.json({
            status: 2,
            message: "Auth false"
        })
    } else {

        User.findOne({
            login
        })
            .then(user => {
                if (!user) {
                    response.json({
                        status: 2,
                        message: "Auth false user"
                    });
                }
                else {
                    bcrypt.compare(password, user.password, function(err, result) {
                        if (!result) {
                            response.json({
                                status: 2,
                                message: "Auth false pass"
                            });
                        } else {
                            request.session.userId = user.id;//
                            request.session.userLogin = user.login;//
                            request.session.userName = user.name;//

                            response.json({
                                status: 1,
                                message: "Auth ok"
                            });
                        }
                    });
                }
            })
            .catch(err => {
                console.log(err);
                response.json({
                    ok: false,
                    error: 'Ошибка, попробуйте позже!'
                });
            });

    }


});


module.exports = app;
