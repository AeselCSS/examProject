
let createItemForm = document.getElementById("createItemForm");
    createItemForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const user, seller, formData;
        user = JSON.parse(localStorage.getItem("user"));
        seller = user.userId;
        formData = new FormData(createItemForm);
        formData.append("userId", seller);

        await fetch("http://localhost:1337/items/create/", {
            method: "POST",
            body: formData
        });
        
    });
