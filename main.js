document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate On Scroll)
  AOS.init();

  // Scroll-to-Top Button
  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.textContent = "↑";
  scrollTopBtn.classList.add("scroll-top-btn");
  document.body.appendChild(scrollTopBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Tabbed Menu Interface
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab");

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => {
        content.classList.remove("active");
        if (content.id === target) {
          content.classList.add("active");
        }
      });

      button.classList.add("active");
    });
  });

  // Live Chat Widget Initialization
  (function () {
    var s = document.createElement("script");
    s.src = "https://tawk.to/tawk.js";
    s.async = true;
    document.body.appendChild(s);
  })();
});
