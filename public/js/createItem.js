
let createItemForm = document.getElementById("createItemForm");
    createItemForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const user = JSON.parse(localStorage.getItem("user"));
        const seller = user.userId;
        const formData = new FormData(createItemForm);
        formData.append("userId", seller);

        await fetch("http://localhost:1337/items/create/", {
            method: "POST",
            body: formData
        });
        
    });
