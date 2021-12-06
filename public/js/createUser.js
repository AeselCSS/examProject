document.getElementById("createUserForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const userId = Math.floor(100000 + Math.random() * 900000);

  const user = {
    username: username,
    password: password,
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

/* --- NOT WORKING ---
let createUserForm = document.getElementById("createUserForm");
    createUserForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const userId = Math.floor(100000 + Math.random() * 900000);
        const formData = new FormData(createUserForm);
        formData.append("userId", userId);

        await fetch("http://localhost:1337/users/create/", {
            method: "POST",
            body: formData
        });
        if (response) {
          location.href = "/public/views/login.html";
        }
    });
    */
