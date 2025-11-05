/*
  Importações
*/
const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express(); // o objeto que representa o servidor é instanciado aqui
const PORT = process.env.PORT || 3000; // a porta do servidor é 3000

// middleware
app.use(morgan("dev")); // morgan provê o logging do backend
app.use(express.static(path.join(__dirname, "public")));
// ativa o serviço para prover os sites estáticos do diretório public

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Servindo arquivos da pasta public!`);
  console.log("Morgan logging ativado");
});
