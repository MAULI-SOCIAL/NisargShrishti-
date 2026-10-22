/**
 * NISARG SHRISHTI - MAIN INTERACTION & ANIMATION SCRIPT
 */
document.addEventListener("DOMContentLoaded", () => {
  // Animated Counters
  const animateCounter = (id, target) => {
    let current = 0;
    const step = Math.ceil(target / 40);
    const element = document.getElementById(id);
    if (!element) return;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        element.textContent = `${target}+`;
        clearInterval(timer);
      } else {
        element.textContent = `${current}+`;
      }
    }, 35);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter("cnt-1", 40);
        animateCounter("cnt-2", 20);
        animateCounter("cnt-3", 15);
        observer.disconnect();
      }
    });
  });

  const cntElement = document.getElementById("cnt-1");
  if (cntElement) observer.observe(cntElement.parentElement);

  setLanguage(currentLang);
});

function openModal(title, desc) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-desc").textContent = desc;
  document.getElementById("detail-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("detail-modal").classList.add("hidden");
}

function openBookingQuickView() {
  window.location.href = "booking.html";
}
