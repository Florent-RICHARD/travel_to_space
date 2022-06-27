let lstBouton = document.querySelectorAll(".bouton");
let infos = document.querySelector(".container-infos");
let img = document.querySelector(".img-vehicle");
let background = document.querySelector(".background");
let img_vehicle = document.querySelector(".img-vehicle");

let icon_menu = document.querySelector(".hamburger");
let icon_close = document.querySelector(".close");
let menu = document.querySelector(".header");

function DesacBtn(){
    for (let index = 0; index < lstBouton.length; index++) {
        lstBouton[index].classList.remove("active");
    }
}

for (let index = 0; index < lstBouton.length; index++) {
    lstBouton[index].addEventListener("click", () =>{
        DesacBtn();
        lstBouton[index].classList.add("active")
        infos.innerHTML = 
        `
        <div class="heading-6">
            THE TERMINOLOGY...
        </div>
        <div class="heading-3">
            ${bdd.technology[index].name}
        </div>
        <p class="text-infos">
            ${bdd.technology[index].description}
        </p>
        `
        img.innerHTML =
        `
            <img src="${bdd.technology[index].images.portrait}" alt="vehicle">
        `
    })
}

// Change l'image de fond selon la taille de la fenêtre
window.addEventListener("resize", ()=>{
    if(window.innerWidth <= 1000){
        background.innerHTML = 
        `
        <img src="./assets/technology/background-technology-tablet.jpg" alt="background-night" class="img_background">
        `
    }else{
        background.innerHTML = 
        `
        <img src="./assets/technology/background-technology-desktop.jpg" alt="background-night" class="img_background">
        `
    }
    
})

// Change l'image du vehicule selon la taille de la fenêtre
window.addEventListener("resize", ()=>{
    if(window.innerWidth <= 1000){
        img_vehicle.innerHTML = 
        `
        <img src="./assets/technology/image-launch-vehicle-landscape.jpg" alt="vehicle">
        `
    }else{
        img_vehicle.innerHTML = 
        `
        <img src="./assets/technology/image-launch-vehicle-portrait.jpg" alt="vehicle">
        `
    }
    
})

icon_menu.addEventListener("click", () =>{
    menu.style.display = "flex";    
})

icon_close.addEventListener("click", () =>{
    menu.style.display = "none";    
})
