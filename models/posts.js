let mongoose = require('mongoose');

let Schema = mongoose.Schema;



module.exports = mongoose.model('Post', new Schema({
    title: {
        type: String,
        required: 'Titre obligatoire'
    },
    content: {
        type: String,
        required: 'Contenu obligatoire'
    },
    author: {
        type: String,
        required: 'Auteur obligatoire'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}));
