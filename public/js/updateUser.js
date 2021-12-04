// PUT request using fetch with error handling

document.getElementById("updateUserForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Find existing users username and add it to the url
  const user = JSON.parse(localStorage.getItem("user"));
  let url = `http://localhost:1337/users/update/${user.username}`;
  console.log(url);
  console.log(user);
  // find existing userId
  const userId = user.userId;
  console.log(userId);

  // find new data from the update form
  const newUsername = document.getElementById("username").value;
  const newPassword = document.getElementById("password").value;

  updatedUser = {
    username: newUsername,
    password: newPassword,
    userId: userId,
  };

  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response) {
        console.log(response);
        // Save login data to localstorage in order to keep user logged in
        localStorage.setItem("user", JSON.stringify(updatedUser));
        document.getElementById("updateUserMessage").innerHTML =
          "User updated successfully.";
      }
    })
    .catch(() => {
      window.alert("oh noes! - Something went wrong.");
    });
});
