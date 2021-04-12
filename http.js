var http = require('http');
var visits = 0;

var server = http.createServer(function (req, res) {
        res.write('server|127.0.0.1\nport|17091\ntype|1\n#maint|Simple HTTP Server by NodeJS ~GalvinID \n\nbeta_server|127.0.0.1\nbeta_port|17092\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001')
res.end()
});

server.listen(8080);
console.log('Port 8080 is Up...')
console.log('Simple HTTP coded by NodeJS')
