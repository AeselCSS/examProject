let updateItemForm = document.getElementById("updateItemForm");
    updateItemForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const itemId, url, formData;
        itemId = document.getElementById("itemIdInput").value;
        url = `http://localhost:1337/items/update/${itemId}`;
        formData = new FormData(updateItemForm);
        
        await fetch(url, {
            method: "PUT",
            body: formData,
        })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            window.alert("Update completed successfully.");
          }
        })
        .catch(() => {
          window.alert("oh noes! - Something went wrong.");
        });
        
    });







