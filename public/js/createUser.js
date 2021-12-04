document.addEventListener("DOMContentLoaded", (e) => {
    document.getElementById("form").addEventListener("submit", (e) => {
      e.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      const user = {
        username: username,
        password: password,
      };
  
      fetch("http://localhost:1337/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            location.href = "/public/views/login.html";
          }
        })
        .catch(() => {
          window.alert("oh noes! - Something went wrong.");
        });
    });
  });