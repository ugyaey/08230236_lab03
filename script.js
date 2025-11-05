// ========== DOM MANIPULATION ==========
// Change heading text and color when clicked
const heading = document.querySelector(".logo");
heading.addEventListener("click", function () {
  heading.textContent = "Welcome to My Interactive Portfolio!";
  heading.style.color = "#faab00ff";
});

// Show current year in footer automatically
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;


// ========== EVENT HANDLING ==========
// Toggle dark and light mode
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// Scroll-to-top button
const scrollBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// ========== FORM VALIDATION ==========
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill in all fields before submitting.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  alert("✅ Message sent successfully!");
  form.reset();
});