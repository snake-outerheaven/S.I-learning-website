"use strict"; // modo seguro do JS

/**
 * ==========================================================
 *  Client Logger - Fase de Desenvolvimento
 *  ----------------------------------------------------------
 *  Autor(es): Equipe do Projeto (Snake e colaboradores)
 *  Função: Registrar eventos de navegação e player no console
 *  Modo: Educacional / Debug em ambiente local
 * ==========================================================
 */

// Configuração global de logging
const CONFIG = {
  PREFIX: "[Projeto-Faculdade]",
  ENABLE_LOGS: true, // alterar para false em produção
};

// Função auxiliar para logs padronizados
function log(message, level = "info") {
  if (!CONFIG.ENABLE_LOGS) return;

  const timestamp = new Date().toLocaleTimeString();
  const formatted = `${CONFIG.PREFIX} ${timestamp} | ${message}`;

  switch (level) {
    case "warn":
      console.warn(formatted);
      break;
    case "error":
      console.error(formatted);
      break;
    default:
      console.log(formatted);
  }
}

// =============================
// Eventos gerais da página
// =============================

window.addEventListener("load", () => log("Página carregada completamente."));
document.addEventListener("DOMContentLoaded", () =>
  log("DOM pronto para uso."),
);

// =============================
// Monitoramento do player
// =============================

const player = document.querySelector(".player");

if (player) {
  player.addEventListener("play", () => log("Vídeo iniciado."));
  player.addEventListener("pause", () => log("Vídeo pausado."));
  player.addEventListener("ended", () => log("Vídeo finalizado."));
  player.addEventListener("volumechange", () =>
    log(`Volume alterado: ${player.volume}`),
  );
  player.addEventListener("error", () =>
    log("Erro no carregamento do vídeo.", "error"),
  );
} else {
  log("Elemento <video> não encontrado no DOM.", "warn");
}

// =============================
// Interações do usuário
// =============================

document.addEventListener("click", (e) => {
  const tag = e.target.tagName.toLowerCase();
  log(`Usuário clicou em <${tag}>`);
});
