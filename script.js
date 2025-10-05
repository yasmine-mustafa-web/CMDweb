// Select elements
const form = document.querySelector("form");
const usernameInput = document.querySelector('input[placeholder="Username"]');
const passwordInput = document.querySelector('input[placeholder="Password"]');
const rememberCheckbox = document.querySelector('#remember input[type="checkbox"]');

// --- Load saved username if "Remember me" was checked ---
window.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("savedUsername");
  if (savedUsername) {
    usernameInput.value = savedUsername;
    rememberCheckbox.checked = true;
  }
});

// --- Handle form submission ---
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // --- Basic validation ---
  if (username === "" || password === "") {
    alert("Please fill in both fields.");
    return;
  }

  // --- Handle "Remember me" ---
  if (rememberCheckbox.checked) {
    localStorage.setItem("savedUsername", username);
  } else {
    localStorage.removeItem("savedUsername");
  }

  // --- Simulate login (you can replace this with your backend call) ---
  if (username === "admin" && password === "1234") {
    alert("✅ Login successful! Redirecting...");
    // Example redirect after successful login:
    window.location.href = "./dashboard.html";
  } else {
    alert("❌ Incorrect username or password.");
  }
});

// --- OPTIONAL: Add password visibility toggle (if you want) ---
const lockIcon = document.querySelector("#lock");
lockIcon.style.cursor = "pointer";

lockIcon.addEventListener("click", () => {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  lockIcon.classList.toggle("fa-eye");
  lockIcon.classList.toggle("fa-lock");
});
