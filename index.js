const http = require("http");

const Start = (req, res) => {
    return res.end(`<h1>Start work</h1>`);
};

const server = http.createServer(Start);

server.listen(5000, "localhost", () => console.log("Start work"));
