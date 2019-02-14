let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let commentSchema = require('./comments');




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
    comments: [commentSchema.schema],
    createdAt: {
        type: Date,
        default: Date.now()
    }
}));
