// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
}

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

// Skills slider (manual + auto-scroll)
const skillsContainer = document.getElementById("skillsContainer");

function scrollSkills(direction) {
  const scrollAmount = 200; // px per click
  skillsContainer.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}

// Auto-scroll like slider ads
let autoScrollInterval;
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    // Scroll right automatically
    if (skillsContainer.scrollLeft + skillsContainer.clientWidth >= skillsContainer.scrollWidth) {
      // If reached end, reset to start
      skillsContainer.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      skillsContainer.scrollBy({ left: 2, behavior: "smooth" }); // 2px per tick
    }
  }, 30); // speed (lower is faster)
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Start auto-scroll when page loads
window.addEventListener("load", startAutoScroll);
