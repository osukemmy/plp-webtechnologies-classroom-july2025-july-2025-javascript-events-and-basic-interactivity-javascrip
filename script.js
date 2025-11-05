// 🌞 Interactive Sunrise Homeschool Page by Ruth Osoro

// Feature 1: Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Feature 2: Welcome Alert on Load
window.addEventListener("load", () => {
  alert("Welcome to Sunrise Homeschool! 🌅 Learn. Grow. Shine.");
});

// Feature 3: Custom Form Validation
const form = document.getElementById("enrollmentForm");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop actual submission

  const studentName = document.getElementById("studentName").value.trim();
  const parentName = document.getElementById("parentName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const curriculum = document.getElementById("curriculum").value;

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const phonePattern = /^[0-9+]{10,13}$/;

  // Validation rules
  if (studentName === "" || parentName === "" || email === "" || phone === "" || curriculum === "") {
    formMessage.textContent = "❌ Please fill in all fields before submitting.";
    formMessage.style.color = "red";
  } else if (!email.match(emailPattern)) {
    formMessage.textContent = "❌ Enter a valid email address.";
    formMessage.style.color = "red";
  } else if (!phone.match(phonePattern)) {
    formMessage.textContent = "❌ Enter a valid phone number (10–13 digits).";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "✅ Thank you for your enrollment! We will contact you soon.";
    formMessage.style.color = "green";
    form.reset();
  }
});
