// Select the form and its fields
const form = document.querySelector("form");
const usernameInput = document.querySelector('input[placeholder="Username"]');
const emailInput = document.querySelector('input[placeholder="E-mail"]');
const passwordInput = document.querySelector('input[placeholder="Password"]');
const checkbox = document.querySelector('input[type="checkbox"]');

// When the form is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent reload

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // --- Validation ---
  if (!username || !email || !password) {
    alert("⚠️ Please fill in all fields.");
    return;
  }

  // --- Email format validation ---
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  // --- Check terms checkbox ---
  if (!checkbox.checked) {
    alert("⚠️ You must agree to the terms before signing up.");
    return;
  }

  // --- Save user (temporary, front-end only) ---
  const userData = { username, email, password };
  localStorage.setItem("registeredUser", JSON.stringify(userData));

  alert("✅ Account created successfully! Redirecting to login page...");

  // Redirect to login page
  window.location.href = "./login.html";
});
