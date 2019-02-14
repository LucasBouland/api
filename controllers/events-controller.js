let events = require('../models/events');

// GET /
exports.getAllEvents = (req, resp) => {
    events.find({}, (err, data) => {
        resp.json(extractData(err, data));
    });
}

// GET /:id
exports.getEventById = (req, resp) => {
    console.log(`ID: ${req.params.id}`);
    events.findById(req.params.id, (err, data) => {
        resp.json(extractData(err, data));
    });
}

// GET /search?....
exports.searchEvent = (req, resp) => {
    const params = req.query;
    let pred = {};
    if (params.name)
        pred.name = { $regex: params.name, $options: 'i' };;
    if (params.sartdate)
        pred.startDate = params.sartdate;
    if (params.city)
        pred.city = { $regex: params.city, $options: 'i' };

    events.find(pred, (err, data) => resp.json(extractData(err, data)));
}

//POST /
exports.createEvent = (req, resp) => {
    let obj = new events(req.body);
    obj.save((err, data) => resp.json(extractData(err, data)));
}

// PUT /:id
exports.updateEvent = (req, resp) => {
    events.findByIdAndUpdate(req.params.id, req.body, { new: false }, (err, data) => resp.json(extractData(err, data)));
}

//DELETE /:id
exports.deleteEvent = (req, resp) => {
    events.remove({ _id: req.params.id }, (err, data) => {
        if (err)
            resp.json(err);
        resp.json({ 'message': 'Event successfully deleted' });
    })
}

function extractData(err, data) {
    if (err)
        return err;
    return data;
}
