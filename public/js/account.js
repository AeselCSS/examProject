document.getElementById("listItem-btn").addEventListener("click", async () => {
  let response = await fetch('http://localhost:1337/items/list', { method: "GET" });
  console.log(response)
  let body = await response.json();

  document.getElementById("listOfItems").innerHTML = JSON.stringify(body);
});

// const button = document.getElementById("listItem-btn")
// button.addEventListener("click", (e) => {
//   console.log("button clicked");

//   fetch("http://localhost:1337/items/list", { method: "GET" })
//     .then((response) => {
//       if (response.ok) return response.json();
//       throw new Error("Request fejlede.");
//     })

//     .then((itemList) => {
//       console.log(itemList);
//     });
// });
// document.getElementById("listItem-btn").addEventListener("click", ()=> {
//     console.log("button clicked");
//   });