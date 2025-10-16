// app.js
"use strict";
import http from "node:http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Olá! Estou rodando em Node.js 🚀");
});

server.listen(3000, () => {
  console.log("Servidor ativo em http://localhost:3000");
});
