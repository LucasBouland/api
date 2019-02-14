let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    name: {
        type: String,
        required: 'Nom obligatoire'
    },
    firstname: String,
    mail: {
        type: String,
        required: 'Mail obligatoire'
    },
    password: {
        type: String,
        required: 'Mot de passe obligatoire'
    },
    admin: Boolean,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: [{
            type: String,
            enum: ['actived', 'closed', 'pending']
        }],
        default: 'actived'
    }
}));
