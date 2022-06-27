let background = document.querySelector(".background");
let icon_menu = document.querySelector(".hamburger");
let icon_close = document.querySelector(".close");
let menu = document.querySelector(".header");

// Change l'image de fond selon la taille de la fenêtre
window.addEventListener("resize", ()=>{
    if(window.innerWidth <= 667){
        background.innerHTML = 
        `
        <img src="./assets/home/background-home-mobile.jpg" alt="background-night" class="img_background">
        `
    }else if(window.innerWidth <= 1000){
        background.innerHTML = 
        `
        <img src="./assets/home/background-home-tablet.jpg" alt="background-night" class="img_background">
        `
    }else{
        background.innerHTML = 
        `
        <img src="./assets/home/background-home-desktop.jpg" alt="background-night" class="img_background">
        `
    }
})

icon_menu.addEventListener("click", () =>{
    menu.style.display = "flex";    
})

icon_close.addEventListener("click", () =>{
    menu.style.display = "none";    
})