const http = require("http");

http
  .createServer(function (req, res) {
    res.end("Olá");
  })
  .listen(8082);

console.log("Servidor rodando!");
