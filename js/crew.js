let lstBouton = document.querySelectorAll(".bouton");
let infos = document.querySelector(".container-infos");
let img = document.querySelector(".img-commander");
let background = document.querySelector(".background");

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
        console.log(index);
        DesacBtn();
        lstBouton[index].classList.add("active")
        infos.innerHTML =
        `
        <div class="heading-4">
            ${bdd.crew[index].role}
        </div>
        <div class="heading-3">
            ${bdd.crew[index].name}
        </div>
        <p class="text-infos">
            ${bdd.crew[index].bio}
        </p>
        `

        img.innerHTML =
        `
            <img src="${bdd.crew[index].images.webp}" alt="commander">
        `
    })
}

// Change l'image de fond selon la taille de la fenêtre
window.addEventListener("resize", ()=>{
    if(window.innerWidth <= 1000){
        background.innerHTML = 
        `
        <img src="./assets/crew/background-crew-tablet.jpg" alt="background-night" class="img_background">
        `
    }else{
        background.innerHTML = 
        `
        <img src="./assets/crew/background-crew-desktop.jpg" alt="background-night" class="img_background">
        `
    }
    
})

icon_menu.addEventListener("click", () =>{
    menu.style.display = "flex";    
})

icon_close.addEventListener("click", () =>{
    menu.style.display = "none";    
})
