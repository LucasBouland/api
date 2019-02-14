let express = require('express');
let users = require('../models/users');
let sha1 = require('../utils/sha1');
let jwt = require('jsonwebtoken');
let conf = require('../configurations/config-mongo');

module.exports = (req, resp) => {
    const login = req.body.login;
    const password = sha1(req.body.password);

    users.findOne({ mail: login, password: password }, (err, data) => {
        if (data) {
            console.log(data.status);
            if (data.status == 'actived') {
                let token = jwt.sign({ id: data._id, login: data.mail, admin: data.admin, name: data.name }, conf.key, { expiresIn: 1440 });
                console.log(token);
                resp.json({ success: true, message: 'login OK', token: token });
            } else {
                resp.status(400).json({ success: false, message: `Le compte utilisateur est ${data.status}` });
            }
        } else {
            resp.status(400).json({ success: false, message: 'login/password invalid.' });
        }
    });


}
