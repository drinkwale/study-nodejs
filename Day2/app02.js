const http = require('http');

const options = {
    host: 'www.google.com',
    port: 80,
    method: 'POST',
    path: '/',
    headers: {}
};

var resData = '';

const req = http.request(options, function (res) {
    // 응답 처리
    res.on('data', function (chunk) {
        resData += chunk;
    });

    res.on('end', function () {
        console.log(resData);
    });
});

options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
req.data = "q=actor";
options.headers['Content-Length'] = req.data.length;

req.on('error', function (err) {
    console.log('오류 발생 : ' + err.message);
});

req.write(req.data);
req.end();