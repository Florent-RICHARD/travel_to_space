let lstBouton = document.querySelectorAll(".bouton");
let infos = document.querySelector(".container-infos");
let img = document.querySelector(".img-moon");
let btn_select_planet = document.querySelectorAll(".bouton")
let selector_planet = document.querySelectorAll(".selection-planet");
let background = document.querySelector(".background");

let icon_menu = document.querySelector(".hamburger");
let icon_close = document.querySelector(".close");
let menu = document.querySelector(".header");

function DesacBtn(){
    for (let index = 0; index < lstBouton.length; index++) {
        lstBouton[index].classList.remove("active");
    }
}

function DesactSelectPlanet(){
    selector_planet.forEach(selector => {
        selector.classList.remove("active");
    });
}

for (let index = 0; index < btn_select_planet.length; index++) {
    const btn = btn_select_planet;
    btn[index].addEventListener("click", () =>{
        DesactSelectPlanet();
        console.log("changment");
        selector_planet[index].classList.add("active");
    })
}

for (let index = 0; index < lstBouton.length; index++) {
    lstBouton[index].addEventListener("click", () =>{
        /*console.log(index);*/
        DesacBtn();
        lstBouton[index].classList.add("active")
        infos.innerHTML = 
        `
        <span class="heading-2">
            ${bdd.destinations[index].name}
        </span>
        <p class="text-infos">
            ${bdd.destinations[index].description}
        </p>
        <div class="info-line"></div>
        <div class="info-number">
            <div class="distance">
                <span class="subheading-2">
                    Avg. distance
                </span>
                <span class="subheading-1">
                    ${bdd.destinations[index].distance}
                </span>
            </div>
            <div class="travel-time">
                <span class="subheading-2">
                    Est. travel time
                </span>
                <span class="subheading-1">
                    ${bdd.destinations[index].travel}
                </span>
            </div>
        </div>
        `
        img.innerHTML =
        `
            <img src="${bdd.destinations[index].images.webp}" alt="vehicle">
        `
    })
}

// Change l'image de fond selon la taille de la fenêtre
window.addEventListener("resize", ()=>{
    if(window.innerWidth <= 1000){
        background.innerHTML = 
        `
        <img src="./assets/destination/background-destination-tablet.jpg" alt="background-night" class="img_background">
        `
    }else{
        background.innerHTML = 
        `
        <img src="./assets/destination/background-destination-desktop.jpg" alt="background-night" class="img_background">
        `
    }
    
})

icon_menu.addEventListener("click", () =>{
    menu.style.display = "flex";    
})

icon_close.addEventListener("click", () =>{
    menu.style.display = "none";    
})

