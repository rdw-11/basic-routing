// var http = require('http');
// var fs = require('fs');
//
// var server = http.createServer(function(req, res){
//   console.log("request has been made: " + req.url);
//   console.log("URL part: " + req.url, "::: Method part: " + req.method)
// if(req.url === '/home' || req.url === '/'){
//   res.writeHead(200, {"Content-Type": "text/html"})
//   fs.createReadStream(__dirname + '/index.html').pipe(res);
// } else if (req.url === '/contact-us'){
//     res.writeHead(200, {"Content-Type": "text/html"})
//     fs.createReadStream(__dirname + '/contact.html').pipe(res)
// } else if(req.url === '/api/ninjas'){
//   var ninjas = [{name: 'Ryu', age: 29}, {name: 'Yoshi', age: 32}];
//   res.writeHead(200, {"Content-Type": "application/json"});
//   res.end(JSON.stringify(ninjas));
// } else{
//   res.writeHead(404, {"Content-Type": "text/html"})
//   fs.createReadStream(__dirname + '/404.html').pipe(res)
//
// }
// });
//
// server.listen(3001, "127.0.0.1");
// console.log("yo dawgs, listening on port 3001");
//

//let's do this no help baby! /
