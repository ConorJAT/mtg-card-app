const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;


// parseBody(request, response, handler)
// - Function that helps parse in user input and
//   utilizes that input to make changes to the server
//   data.
//
// handler: POST function handler.
const parseBody = (request, response, handler) => {
  const body = [];

  request.on('error', (err) => {
    console.dir(err);
    response.statusCode = 400;
    response.end();
  });

  request.on('data', (chunk) => {
    body.push(chunk);
  });

  request.on('end', () => {
    // application/x-www-form-urlencoded (key1=value1&key2=value2)
    const bodyString = Buffer.concat(body).toString();
    let bodyParams;

    if (request.headers['content-type'] === 'application/json') {
      bodyParams = JSON.parse(bodyString);
    } else {
      bodyParams = query.parse(bodyString);
    }

    handler(request, response, bodyParams);
  });
};

// Struct used to define all pathways necessary for the
// server to perform its core actions (POST methods have
// to be added later b/c of request and response variables).
const urlStruct = {
  
};

// Receives user request and engages in a particular action
// based on parsed URL value.
const onRequest = (request, response) => {
  const parsedURL = url.parse(request.url);

  // POST methods are added here b/c of the need for request and response in parseBody.
  urlStruct.POST = {
    
  };

};

// Start the server.
http.createServer(onRequest).listen(port, () => { console.log(`Listening on 127.0.0.1:${port}`); });