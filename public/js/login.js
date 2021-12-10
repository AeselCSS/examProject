// Check if user is already logged in - if so redirect 
document.addEventListener("DOMContentLoaded", (e) => {
  const user = localStorage.getItem("user");
  if (user) {
    location.href = "/public/views/";
  }
// User login
  document.getElementById("loginform").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = {
      username: username,
      password: password,
    };

    fetch("http://localhost:1337/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          if (
            username === response.username &&
            password === response.password
          ) {
            // Save login data to localstorage in order to keep user logged in
            localStorage.setItem("user", JSON.stringify(response));
            location.href = "/";
          } else {
            window.alert("Username or Password is incorrect");
          }
        } else {
          window.alert("Information are incorrect");
        }
      })
      .catch(() => {
        window.alert("oh noes! - Something went wrong.");
      });
  });
});
