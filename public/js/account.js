
window.addEventListener("pageshow", async () => {
  let table = document.getElementById('showUserData');

  const user = JSON.parse(localStorage.getItem("user"));
  let url = `http://localhost:1337/users/${user.username}`;
  console.log(user);
  
  let result = await fetch(url, { method: "GET" })
  .then(res => res.json())
  .catch(err => console.log(err));
  
  // result logic goes here
  let userDataTableHtml = `
  <tr>
      <th></th>
      <th></th>
  </tr>
  `;

  for(const userData in result) {
    userDataTableHtml += `
    <tr>
      <td>${userData}</td>
      <td>${result[userData]}</td>
    </tr>
    `;
  }
  table.innerHTML = userDataTableHtml;


});
