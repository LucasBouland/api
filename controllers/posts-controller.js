let posts = require('../models/posts');
let sha1 = require('../utils/sha1');

// GET /
exports.getAllPosts = (req, resp) => {
    posts.find({}, (err, data) => {
        resp.json(extractData(err, data));
    });
};

// GET /:id
exports.getPostById = (req, resp) => {
    console.log(`ID: ${req.params.id}`);
    posts.findById(req.params.id, (err, data) => {
        resp.json(extractData(err, data));
    });
};

//POST /
exports.createPost = (req, resp) => {
    let obj = new posts(req.body);
    //TODO check post integrité
    obj.save((err, data) => resp.json(extractData(err, data)));
};

// PUT /:id
exports.updatePost = (req, resp) => {
    posts.findByIdAndUpdate(req.params.id, req.body, { new: false }, (err, data) => resp.json(extractData(err, data)));
};

//DELETE /:id
exports.deletePost = (req, resp) => {
    posts.remove({ _id: req.params.id }, (err, data) => {
        if (err)
            resp.json(err);
        resp.json({ 'message': 'News successfully deleted' });
    })
}

function extractData(err, data) {
    if (err)
        return err;
    return data;
}
