let jwt = require('jsonwebtoken');
let conf = require('../configurations/config-mongo');

exports.token = (req, resp, next) => {

    if (req.headers['authorization']) {
        let token = req.headers['authorization'].split(" ")[1] || req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, conf.key, (err, decoded) => {
                if (err) {
                    resp.status(403).json({ status: "error", message: err.message });
                } else {
                    console.log(`mail: ${decoded.login}`);
                    req['user'] = decoded;
                    next();
                }
            });
        } else
            resp.status(401).json({ status: "error", message: "token required" });
    } else
        resp.status(401).json({ status: "error", message: "token required" });
};

exports.self = (req,resp,next) => {
    let user = req['user'];
    if (user.id === req.body.id)
    {
        next();
    }
    else
    {
        resp.status(403).json({ status: "error", message: "change pas les autres stp" });
    }
};

exports.admin = (req, resp, next) => {
    let user = req['user'];
    if (user.admin == true) {
        next();
    } else {
        resp.status(403).json({ status: "error", message: "admin required" });
    }

}
