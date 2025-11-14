document.addEventListener("DOMContentLoaded", () => {
  /* ===============================================
     FADE FROM BLACK SUAVE
  =============================================== */
  // Body inicialmente invisível
  document.body.style.opacity = 0;

  // Overlay preto
  const fadeOverlay = document.createElement("div");
  fadeOverlay.classList.add("fade-overlay");
  document.body.appendChild(fadeOverlay);

  setTimeout(() => {
    document.body.style.transition = "opacity 1.2s ease";
    document.body.style.opacity = 1;
    fadeOverlay.style.opacity = 0;
  }, 50);

  setTimeout(() => fadeOverlay.remove(), 1300);

  /* ===============================================
     OVERLAY CINZA DURANTE O VÍDEO
  =============================================== */
  const video = document.getElementById("interviewVideo");
  const mainSection = document.querySelector("main");
  const videoSection = document.querySelector(".video");

  if (video && mainSection && videoSection) {
    // Cria overlay cinza cobrindo o main
    const greyOverlay = document.createElement("div");
    greyOverlay.style.position = "absolute";
    greyOverlay.style.inset = 0;
    greyOverlay.style.backgroundColor = "rgba(50,50,50,0.6)";
    greyOverlay.style.zIndex = 1; // abaixo do vídeo
    greyOverlay.style.pointerEvents = "none";
    greyOverlay.style.opacity = 0;
    greyOverlay.style.transition = "opacity 0.3s ease";

    mainSection.appendChild(greyOverlay);

    // Eleva a seção do vídeo acima do overlay
    videoSection.style.position = "relative";
    videoSection.style.zIndex = 2;

    // Eventos do vídeo
    video.addEventListener("play", () => (greyOverlay.style.opacity = 1));
    const removeGrey = () => (greyOverlay.style.opacity = 0);
    video.addEventListener("pause", removeGrey);
    video.addEventListener("ended", removeGrey);
  }

  /* ===============================================
     CAROUSEL DE SLIDES
  =============================================== */
  const slides = [
    "image/slide1.png",
    "image/slide2.png",
    "image/slide3.png",
    "image/slide4.png",
  ];
  let currentSlide = 0;

  const slideImage = document.getElementById("slideImage");
  const prevBtn = document.querySelector(".slide-carousel .prev");
  const nextBtn = document.querySelector(".slide-carousel .next");

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slideImage.src = slides[currentSlide];
    slideImage.alt = `Slide ${currentSlide + 1}`;
  }

  prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
  nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
});
