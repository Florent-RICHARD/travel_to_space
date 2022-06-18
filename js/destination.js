let lstBouton = document.querySelectorAll(".bouton");
let infos = document.querySelector(".container-infos");
let img = document.querySelector(".img-moon");

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