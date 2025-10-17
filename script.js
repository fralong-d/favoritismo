// Sito fatto apposta per gli staffers, se hai avuto accesso ad esso apri un ticket gestione per segnalare lo staffer che te l'ha fornito, se l'hai trovato su da solo allora complimenti.

window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  const main = document.getElementById("main-content");


  setTimeout(() => {
    loader.style.transition = "opacity 0.6s ease, filter 0.6s ease";
    loader.style.opacity = "0";
    loader.style.filter = "blur(6px)";

    setTimeout(() => {
      loader.style.display = "none";
      main.classList.remove("hidden");
      document.body.style.overflow = "auto";

      main.style.opacity = "0";
      main.style.filter = "blur(10px)";
      main.style.transition = "opacity 0.8s ease, filter 0.5s ease";
      requestAnimationFrame(() => {
        main.style.opacity = "1";
        main.style.filter = "blur(0)";
      });


      const lenis = new Lenis({
        duration: 1.2,
        smooth: true,
        direction: 'vertical',
        gestureDirection: 'vertical',
        smoothTouch: false,
        touchMultiplier: 1.5
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

    }, 600);
  }, 800);
});