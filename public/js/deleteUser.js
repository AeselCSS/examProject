document.getElementById("delete").addEventListener("submit", (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));
  let url = `http://localhost:1337/users/delete/${user.username}`;

  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response) {
        localStorage.removeItem("user");
        location.href = "./../views/login.html";
      }
    })
    .catch(() => {
      window.alert("oh noes! - Something went wrong.");
    });
});
