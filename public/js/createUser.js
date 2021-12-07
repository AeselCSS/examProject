document.getElementById("createUserForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username, password, userId;

  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  userId = Math.floor(100000 + Math.random() * 900000);

  const user = {
    username: username,
    password: password,
    userId: userId,
  };

  await fetch("http://localhost:1337/users/create", {
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