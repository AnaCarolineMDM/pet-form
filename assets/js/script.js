const form = document.getElementById("form");

const namePet = document.getElementById("namePet");
const tipoPet = document.getElementById("tipoPet");
const raca = document.getElementById("raca");
const sexo = document.getElementById("sexo");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    checkInputNamePet();
})

function checkInputName(){
    const namePetValue = namePet.value;

}