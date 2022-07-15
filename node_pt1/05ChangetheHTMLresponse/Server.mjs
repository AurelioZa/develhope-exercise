import {createServer} from "node:http";

const server = createServer((req, res) => {
    res.statusCode = 200;

    res.setHeader("Content-Type", "text/html");

    res.end('<p>Sono un paragrafo <strong>HTML</strong>!</p>');
});

server.listen(8080, () => {
    console.log('Server running!')
});