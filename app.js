let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let usersRoutes = require('./routes/users-routes');
let postsRoutes = require('./routes/posts-routes');
let authController = require('./controllers/authentication-controller');

let auth = require('./utils/validate-token');
let cors = require('cors');
let app = express();

//SWAGGER
//let swag = require('swagger-ui-express');
//let swagDoc = require('./swagger.yaml');
app.use(cors());
let swag = require('express-swagger-generator')(app);
let options = require('./swagger');
swag(options);
//app.use('/api-docs', swag.serve, swag.setup(swagDoc));

/*app.use((req, resp, next) => {
    console.log("test");
    next();
});*/

const confMongo = require('./configurations/config-mongo');
// mongoose.Promise = global.Promise; V4
mongoose.connect(confMongo.database);

app.use(bodyParser.urlencoded({ extended: false })); //URL
app.use(bodyParser.json()); //BODY

app.post('/authentication', authController);
app.use('/api/posts', postsRoutes);
app.use('/api/users', usersRoutes);

app.route('/').get((req, resp) => {
    resp.json('WEB API');
});

app.listen(80);

module.exports = app;

