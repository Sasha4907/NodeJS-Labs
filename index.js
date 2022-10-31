const http = require("http");
const dotenv = require('dotenv');

dotenv.config();

const Start = (req, res) => {
  return res.end(`<h1>Start work</h1>`)
}

const server = http.createServer(Start);

server.listen(process.env.PORT, process.env.HOST, () => console.log('Start work'))
