// List of items created by user
window.addEventListener("pageshow", async () => {
  let result = await fetch("http://localhost:1337/items/list", {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  function createTableHead(table) {
    let tableHead = table.createTHead();
    let row = tableHead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  function createTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

  let table = document.querySelector("table");
  let data = Object.keys(result[0]);
  createTableHead(table, data);
  createTable(table, result);
});
