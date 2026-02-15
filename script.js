document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll("a").forEach((link) => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", function (e) {

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


  const typingElement = document.getElementById("typing");
  if (typingElement) {
    const roles = [
      "Web Developer",
      "Backend Engineer",
      "Automation Specialist",
      "Melhor gwen BR",
    ];

    const typeSpeed = 90;      
    const deleteSpeed = 45;      
    const pauseAfterType = 900;  
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

  const bars = document.querySelectorAll(".progress-bar");
  bars.forEach((bar) => {
    const percentAttr = bar.getAttribute("data-percent");

    if (!percentAttr) return;

    const percent = Number(percentAttr);
    if (!Number.isFinite(percent)) return;

    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.width = `${Math.max(0, Math.min(100, percent))}%`;
    }, 250);
  });
});
