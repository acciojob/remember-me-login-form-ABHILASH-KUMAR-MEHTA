//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberMeCheckbox = document.getElementById("checkbox");
  const submitButton = document.getElementById("submit");
  const existingButton = document.getElementById("existing");

  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  // Show "Login as existing user" if credentials exist
  if (savedUsername && savedPassword) {
    existingButton.style.display = "inline-block";
  }

  // Handle form submission
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    alert(`Logged in as ${username}`);

    if (rememberMeCheckbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    
    location.reload();
  });

  // Handle existing user login
  existingButton.addEventListener("click", () => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      alert(`Logged in as ${savedUser}`);
    }
  });
});
