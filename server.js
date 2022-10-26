var http = require('http'); 
var url = require('url');
const os = require('os');

var server = http.createServer(function (req, res) {   
   
	var params = url.parse(req.url, true).query;
	mess = params.message
	var hn = os.hostname()
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: mess, hostname: hn}));
        res.end();  
});

server.listen(8080);

console.log('Node.js ECHO web server at port 8080 is running..')
