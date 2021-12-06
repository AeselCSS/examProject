//step 1 find item from itemId
//step 1 find item from itemId method GET or item.itemId
document.getElementById("submitItemId").addEventListener("click", () => {
  const itemId = document.getElementById("itemIdInput").value;
  let url = `http://localhost:1337/items/delete/${itemId}`;
  
console.log(url);
  fetch(url, {method: "DELETE" })
    
    .then((response) => response.json())
    .then((response) => {
      if (response) {
        window.alert(response.message);
      }
    })
    .catch(() => {
      window.alert("oh noes! - Something went wrong.");

  
});
});
  
  //step 2 show as table and create button to confirm user wants to delete the item
//step 3 button pressed => delete call to api




