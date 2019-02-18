var http = require('http');

var qs = require('querystring');

var data = {
    a: 123,
    time: new Date().getTime()};//这是需要提交的数据
// "http": "0.0.0",
    // "querystring": "^0.2.0",
    // "request": "^2.88.0"

var content = qs.stringify(data);

var options = {
    hostname: '127.0.0.1',
    port: 4200,
    path: '/hello',
    method: 'get'
};

var req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req.end();