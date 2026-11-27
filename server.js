const http = require("node:http");
const server = http.createServer(function (request, response) {
    if(request.url == '/') {
        console.log('main page')
        response.end('plum, accurate meeting transcription tool')
    }
    if(request.url == '/meetings') {
        console.log("meetings")
        response.end('here is all your meetings')
    }
    if(request.url == '/login') {
        console.log("login")
        response.end('please login with your apple account')
    }
    if(request.url == '/about') {
        console.log("about")
        response.end('plum is founded 6 months later from now')
    }
}
);
server.listen(3000)
console.log(server.listening);