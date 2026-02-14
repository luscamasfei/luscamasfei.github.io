document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     PAGE TRANSITION
  ========================= */

  document.querySelectorAll("a").forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.href;

        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = href;
        }, 400);
      });
    }
  });

  /* =========================
     TYPING EFFECT (Home only)
  ========================= */

  const typingElement = document.getElementById("typing");

  if (typingElement) {
    const roles = [
      "Web Developer",
      "Backend Engineer",
      "Automation Specialist",
      "Melhor gwen BR"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    function typeEffect() {
      const fullText = roles[roleIndex];

      if (isDeleting) {
        currentText = fullText.substring(0, charIndex--);
      } else {
        currentText = fullText.substring(0, charIndex++);
      }

      typingElement.textContent = currentText;

      if (!isDeleting && charIndex === fullText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
  }

  /* =========================
     SKILL BAR ANIMATION
  ========================= */

  const bars = document.querySelectorAll(".progress-bar");

  bars.forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    setTimeout(() => {
      bar.style.width = percent + "%";
    }, 300);
  });
});
// Animar barras de progresso
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress-bar");

  bars.forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    setTimeout(() => {
      bar.style.width = percent;
    }, 300);
  });
});
