document.addEventListener("DOMContentLoaded", () => {
  // Fade-in da página
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1.2s ease";
    document.body.style.opacity = 1;
  }, 100);

  // Seleção do vídeo e do main para overlay
  const video = document.getElementById("interviewVideo");
  const mainSection = document.querySelector("main");

  // Adiciona overlay cinza quando o vídeo toca
  video.addEventListener("play", () => {
    mainSection.classList.add("greyed");
  });

  // Remove overlay ao pausar ou terminar o vídeo
  const removeGrey = () => mainSection.classList.remove("greyed");
  video.addEventListener("pause", removeGrey);
  video.addEventListener("ended", removeGrey);
});
