import {createServer} from "node:http";

const server = createServer((req, res) => {
    res.statusCode = 200;

    res.setHeader("Content-Type", "application/JSON");

    const jsonResponse = JSON.stringify({location: "MARTE"})

    res.end(jsonResponse);
});

server.listen(8080, () => {
    console.log('Server running!')
});