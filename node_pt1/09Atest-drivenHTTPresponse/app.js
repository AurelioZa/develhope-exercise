const {createServer} = require ("node:http");

function createApp(){
    return createServer((req, res) => {
        res.statusCode = 200;

    //  res.setHeader("Content-Type", "application/json");
        res.setHeader("Content-Type", "text/html");

    //  const jsonResponse = JSON.stringify({location: "MARTE"})

    //  res.end(jsonResponse);
        res.end("Welcome to the World Wide Web!")
    });
}

module.exports = createApp