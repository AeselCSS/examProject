document.getElementById("submitItemId").addEventListener("click", async () => {
  const itemId = document.getElementById("itemIdInput").value;
  let url = `http://localhost:1337/items/delete/${itemId}`;
  
console.log(url);
  await fetch(url, {method: "DELETE" })
    
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





