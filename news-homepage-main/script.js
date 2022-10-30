// initializing variables
const navbar = document.querySelector('nav');
const openMenu = document.querySelector("#menu-btn");
const closeMenu = document.querySelector("#close");

// adding event to open-menu button
openMenu.addEventListener('click' , ()=>{
    console.log("working");
     navbar.classList.add("open");
     document.body.style.backgroundColor= "rgba(0,0,0,0.10)";
});

// adding event to close-menu button
closeMenu.addEventListener('click' , ()=>{
    console.log("working");
     navbar.classList.remove("open");
     document.body.style.backgroundColor= "white";
});
   
