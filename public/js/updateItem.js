let updateItemForm = document.getElementById("updateItemForm");
    updateItemForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));
        const itemId = document.getElementById("itemIdInput").value;
        const url = `http://localhost:1337/items/update/${itemId}`;
        const formData = new FormData(updateItemForm);
        formData.append("userId", user.userId);
        
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







