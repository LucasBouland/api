module.exports = {
    swaggerDefinition: {
        info: {
            description: '',
            title: 'WEB API en NodeJS',
            version: '1.0.0',
        },
        host: 'localhost: 3000',
        basePath: '/api',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'
        ],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./routes/*.js'] //Path to the API handle folder
};