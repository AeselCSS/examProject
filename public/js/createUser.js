document.getElementById("createUserForm").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const fullName = document.getElementById("fullName").value;
  const address = document.getElementById("address").value;
  const zip = document.getElementById("zip").value;
  const userId = Math.floor(100000 + Math.random() * 900000);

  const user = {
    username: username,
    password: password,
    email: email,
    fullName: fullName,
    adress: address,
    zip: zip,
    userId: userId,
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