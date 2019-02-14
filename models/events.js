let mongoose = require('mongoose');

let Schema = mongoose.Schema;



module.exports = mongoose.model('Event', new Schema({
    name: {
        type: String,
        required: 'Nom obligatoire'
    },
    startDate: {
        type: Date,
        required: 'Date de début obligatoire'
    },
    endDate: {
        type: Date,
        required: 'Date de fin obligatoire'
    },
    street: String,
    zipCode: String,
    city: {
        type: String,
        required: 'Ville obligatoire'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}));
