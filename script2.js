
const container=document.querySelector(".container")
const baseURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for(let i=1;i<=151;i++){
    const pokemon=document.createElement("div")
    const digit=i;
    const newImg=document.createElement("img")
    // console.log(newImg)
    newImg.src = `${baseURL}${i}.png`;
    console.log(newImg)
    pokemon.append(`#${digit}`)
    pokemon.appendChild(newImg)
    container.appendChild(pokemon)
}