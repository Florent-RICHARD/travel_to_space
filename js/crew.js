let lstBouton = document.querySelectorAll(".bouton");
let infos = document.querySelector(".container-infos");
let img = document.querySelector(".img-commander");

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