const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

// Logging com Morgan - formato 'dev' (colorido para desenvolvimento)
app.use(morgan("dev"));

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Rota principal (opcional, pois o Express já serve index.html automaticamente)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📁 Servindo arquivos da pasta 'public'`);
  console.log(`📊 Morgan logging ativado`);
});
