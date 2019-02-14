let mongoose = require('mongoose');

let Schema = mongoose.Schema;



module.exports = mongoose.model('Comment', new Schema({
    content: {
        type: String,
        required: 'Contenu obligatoire'
    },
    author: {
        type: String,
        required: 'Auteur obligatoire'
    },
    post: {
        type: String,
        required: 'News obligatoire'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}));
