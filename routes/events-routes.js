let express = require('express');
let router = express.Router();
let controller = require('../controllers/events-controller');
let auth = require('../utils/validate-token');

/**
 * @typedef Event
 * @property {string} name.required
 * @property {date} startDate.required
 * @property {date} endDate.required
 * @property {string} street
 * @property {string} zipcode
 * @property {string} city.required
 */

/**
 * Search events
 * @route GET /api/events/search
 * @group events - Operations about events
 * @param {string} name.query - name of event
 * @param {string} city.query - city of event
 * @param {date} startDate.query - start date of event
 * @returns {Array.<Event>} 200 - An array of events
 * @returns {Error} - Unexpected error
 */
router.route('/search')
    .get(controller.searchEvent)

/**
 * @route GET /api/events
 * @group events - Operations about events
 * @returns {Array.<Event>} 200 - An array of events
 * @returns {Error} - Unexpected error
 */
/**
 * @route POST /api/events
 * @group events - Operations about events
 * @param {Event} event - Event to insert
 * @returns {Event} 200 - Event created
 * @returns {Error} - Unexpected error
 */
router.route('/')
    .get(controller.getAllEvents)
    .post(controller.createEvent);

/**
 * @route GET /api/events/:id
 * @group events - Operations about events
 * @param {string} id - id to find event
 * @returns {Event} 200 - An event
 * @returns {Error} - Unexpected error
 */
/**
* @route PUT /api/events/:id
* @group events - Operations about events
* @param {string} id.query - id to update event
* @param {Event} event - Event to update
* @returns {Event} 200 - Event updated
* @returns {Error} - Unexpected error
*/
/**
 * @route DELETE /api/events/:id
 * @group events - Operations about events
 * @param {string} id - id to remove event
 * @returns {Event} 200 - Event deleted
 * @returns {Error} - Unexpected error
 */
router.route('/:id')
    .get(controller.getEventById)
    .put(controller.updateEvent)
    .delete(auth.admin, controller.deleteEvent);


module.exports = router;