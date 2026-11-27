// const meetingname = document.querySelector(meetingname)
const meetings = ['Plum Brainstroming', 'Robotics Meeting 2']

const http = require("node:http");
const server = http.createServer(function (request, response) {
    if(request.url == '/') {
        console.log('main page');
        response.end('plum, accurate meeting transcription tool');
    }
    else if(request.url == '/meetings') {
        console.log("meetings");
        response.end(JSON.stringify(meetings));
    }
    else if(request.url == '/meetings/new') {
        console.log('newmeeting');
        meetings.push('Plum Daily')
        response.end('new meeting is created.')
    }
    else if(request.url == '/login') {
        console.log("login");
        response.end('please login with your apple account');
    }
    else if(request.url == '/about') {
        console.log("about");
        response.end('plum is founded 6 months later from now');
    }
    else {
        response.end('page not found');
    }
}
);
server.listen(3000);
console.log(server.listening);