let http = require("http");

function executeRequest(req, resp) {
    resp.write('bonjour');
    resp.end();
}

http.createServer(executeRequest).listen(8888);
console.log('server start');