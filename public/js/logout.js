document.getElementById('logout').addEventListener('click', () => {
//    console.log('logout button clicked');  
//    console.log(localStorage.getItem('user'))
 localStorage.removeItem("user");
 location.href = "./../views/login.html"; 
});


