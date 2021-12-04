// check if user is logged in and if not redirected to the login page
document.addEventListener("DOMContentLoaded", (e) => {
  const user = localStorage.getItem("user");
  if (!user) {
    window.location.href = "/public/views/login.html";
  }
});
