// PUT request using fetch with error handling

document.getElementById("updateUserForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Find existing users username and add it to the url
  const user = JSON.parse(localStorage.getItem("user"));
  let url = `http://localhost:1337/users/update/${user.username}`;
  // find existing userId
  const userId = user.userId;

  // find new data from the update form
  const newUsername = document.getElementById("username").value;
  const newPassword = document.getElementById("password").value;
  const newEmail = document.getElementById("email").value;
  const newFullName = document.getElementById("fullName").value;
  const newAddress = document.getElementById("address").value;
  const newZip = document.getElementById("zip").value;

  updatedUser = {
    username: newUsername,
    password: newPassword,
    email: newEmail,
    fullName: newFullName,
    adress: newAddress,
    zip: newZip,
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
        window.alert("User updated successfully");
      }
    })
    .catch(() => {
      window.alert("oh noes! - Something went wrong.");
    });
});
