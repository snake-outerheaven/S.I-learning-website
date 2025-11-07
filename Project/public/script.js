document.addEventListener("DOMContentLoaded", () => {
  /* ===============================================
     FADE FROM BLACK SUAVE
  =============================================== */
  // Coloca o body invisível inicialmente
  document.body.style.opacity = 0;

  // Cria overlay preto
  const fadeOverlay = document.createElement("div");
  fadeOverlay.classList.add("fade-overlay");
  document.body.appendChild(fadeOverlay);

  // Faz o fade do body
  setTimeout(() => {
    document.body.style.transition = "opacity 1.2s ease";
    document.body.style.opacity = 1;
    fadeOverlay.style.opacity = 0;
  }, 50);

  // Remove overlay após o fade
  setTimeout(() => {
    fadeOverlay.remove();
  }, 1300);

  /* ===============================================
     OVERLAY CINZA DURANTE O VÍDEO
  =============================================== */
  const video = document.getElementById("interviewVideo");
  const mainSection = document.querySelector("main");

  if (video && mainSection) {
    video.addEventListener("play", () => mainSection.classList.add("greyed"));
    const removeGrey = () => mainSection.classList.remove("greyed");
    video.addEventListener("pause", removeGrey);
    video.addEventListener("ended", removeGrey);
  }
});
