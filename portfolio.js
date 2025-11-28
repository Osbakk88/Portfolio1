// Scroll animation for text paragraphs
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all paragraphs in the columns section
document.addEventListener("DOMContentLoaded", () => {
  try {
    const paragraphs = document.querySelectorAll(".columns p");
    paragraphs.forEach((p) => observer.observe(p));
  } catch (error) {
    // Gracefully handle if elements don't exist on the page
    console.error("Error initializing scroll animations:", error);
  }
});
