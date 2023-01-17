const http = require('http');
const db = require('./db');

http.createServer((req,res) => {
res.writeHead(200,{'content-type':'application/json'});
res.write(JSON.stringify(db));
// res.write(JSON.stringify({name:'pranita',email:'pranita@gmail.com'}));
res.end();

}).listen(8000);