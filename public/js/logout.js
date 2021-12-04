document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("user");
  location.href = "./../views/login.html";
});
