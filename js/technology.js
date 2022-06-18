let lstBouton = document.querySelectorAll(".bouton");
let infos = document.querySelector(".container-infos");
let img = document.querySelector(".img-vehicle");

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