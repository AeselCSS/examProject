// List of items created by logged in user
let table = document.getElementById("showItemData");
const user = JSON.parse(localStorage.getItem("user"));

window.addEventListener("pageshow", async () => {
  document.getElementById("filterBySeller").innerHTML = `
  <button id="input" value="${user.userId}" onclick="filterItemSeller()">Only my listings</button>
  `;
  table.innerHTML = `
    
      <tr>
        <th>Category:</th>
        <th>Name:</th>
        <th>Price:</th>
        <th>ItemId:</th>
        <th>Seller:</th>
        <th>Image:</th>
      </tr> 
        
  `;
  await fetch("http://localhost:1337/items/list", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      res.forEach((element) => {
        table.innerHTML += `
        <tr>
          <td>${element.category}</td>
          <td>${element.name}</td>
          <td>${element.price}</td>
          <td>${element.itemId}</td>
          <td>${element.userId}</td>
          <td><img src="./../../${element.image}""></img></td>
        </tr>
        `;
      });
    });
});

// // Sort items by Seller
function filterItemSeller() {
  // Declare variables
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("input");
  filter = input.value;
  table = document.getElementById("showItemData");
  tr = table.getElementsByTagName("tr");

  // // Loop through tr's, and hide those that doesnt match
  for (i = 0; i < tr.length; i++) {
    // <- for loop starts in index 0 and keeps running as long as there are rows
    td = tr[i].getElementsByTagName("td")[4]; // <- Search isolated to userID
    if (td) {
      // if search query is a match show item
      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        // else hide those items that doesnt macht
        tr[i].style.display = "none";
      }
    }
  }
}
