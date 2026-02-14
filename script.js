document.addEventListener("DOMContentLoaded", () => {
  // ===== Fade-out navigation (mantém o seu) =====
  document.querySelectorAll("a").forEach((link) => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", function (e) {
        // só intercepta links normais (não âncoras na mesma página)
        const href = this.getAttribute("href");
        if (!href || href.startsWith("#")) return;

        e.preventDefault();
        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = this.href;
        }, 400);
      });
    }
  });

  // ===== Typing effect (corrigido, sem travar) =====
  const typingElement = document.getElementById("typing");
  if (typingElement) {
    const roles = [
      "Web Developer",
      "Backend Engineer",
      "Automation Specialist",
      "Melhor gwen BR",
    ];

    const typeSpeed = 90;        // velocidade digitando
    const deleteSpeed = 45;      // velocidade apagando
    const pauseAfterType = 900;  // pausa quando termina a palavra
    const pauseAfterDelete = 200;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function tick() {
      const word = roles[roleIndex];

      if (!isDeleting) {
        // digitando
        charIndex++;
        typingElement.textContent = word.substring(0, charIndex);

        if (charIndex === word.length) {
          isDeleting = true;
          setTimeout(tick, pauseAfterType);
          return;
        }

        setTimeout(tick, typeSpeed);
      } else {
        // apagando
        charIndex--;
        typingElement.textContent = word.substring(0, Math.max(charIndex, 0));

        if (charIndex <= 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(tick, pauseAfterDelete);
          return;
        }

        setTimeout(tick, deleteSpeed);
      }
    }

    tick();
  }

  // ===== Progress bars (só anima se tiver data-percent) =====
  const bars = document.querySelectorAll(".progress-bar");
  bars.forEach((bar) => {
    const percentAttr = bar.getAttribute("data-percent");

    // se não tem data-percent, não mexe (pra não quebrar seu CSS por classe)
    if (!percentAttr) return;

    const percent = Number(percentAttr);
    if (!Number.isFinite(percent)) return;

    // começa em 0 e anima para o percentual
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.width = `${Math.max(0, Math.min(100, percent))}%`;
    }, 250);
  });
});
