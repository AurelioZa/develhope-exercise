const createApp = require("./app")

const server = createApp();

server.listen(8080, () => {
    console.log('Server running!')
});