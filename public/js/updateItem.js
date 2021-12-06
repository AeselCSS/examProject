let updateItemForm = document.getElementById("updateItemForm");
    updateItemForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const itemId = document.getElementById("itemIdInput").value;
        const url = `http://localhost:1337/items/update/${itemId}`;
        const formData = new FormData(updateItemForm);
        
        await fetch(url, {
            method: "PUT",
            body: formData
        });
        
    });







/*document.getElementById("submitItemUpdate").addEventListener("click", () => {
    const itemId = document.getElementById("itemIdInput").value;
    const itemCategory = document.getElementById("itemCategoryInput").value;
    const itemName = document.getElementById("itemNameInput").value;
    const itemPrice = document.getElementById("itemPriceInput").value;
    
    // console.log(itemId);
    // console.log(itemCategory);
    // console.log(itemName);
    // console.log(itemPrice);

    const url = `http://localhost:1337/items/${itemId}`;
    const result = fetch(url, { method: "GET"})
    .then((response) => response.json())
    .then((data) =>{
        // console.log(data);
        const itemImageUrl = data.image;
        const itemUserId = data.userId;
        // console.log(itemImageUrl);
        // console.log(itemUserId);

        const putData = itemCategory, itemName, itemPrice, itemUserId, itemId, itemImageUrl
        console.log(putData);
    // return fetch(url, { 
    //     method: "PUT",
    //     body: putData, 
    // })
    })
});


let updateItemForm = document.getElementById("updateItemForm");
updateItemForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const itemId = document.getElementById("itemIdInput").value;
  const url = `http://localhost:1337/items/${itemId}`;
  const formData = new FormData(createItemForm);
  formData.append("userId", seller);

  await fetch(url, {
    method: "PUT",
    body: formData,
  });
});



const url = 'https://api.spacexdata.com/v4';

const result = fetch(`${url}/launches/latest`, { method: 'get' })
  .then(response => response.json()) // pass the data as promise to next then block
  .then(data => {
    const rocketId = data.rocket;

    console.log(rocketId, '\n');
  
    return fetch(`${url}/rockets/${rocketId}`); // make a 2nd request and return a promise
  })
  .then(response => response.json())
  .catch(err => {
    console.error('Request failed', err)
  })

// I'm using the result const to show that you can continue to extend the chain from the returned promise
result.then(r => {
  console.log(r.first_stage); // 2nd request result first_stage property
});
*/