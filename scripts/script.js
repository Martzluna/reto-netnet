const popularContent = document.getElementById("popularContent")
const animeContent = document.getElementById("animeContent")
const crimesContent = document.getElementById("crimesContent")
const exampleModal = document.getElementById("exampleModal")
const detailContent = document.getElementById("detailContent")
var popular = document.createDocumentFragment();
var animes = document.createDocumentFragment();
var crimes = document.createDocumentFragment();


const data = [
    {
        "name": "Matrix Recargado",
        "genre": "popular",
        "desc": "Neo, Morpheus, Trinity y el resto de la tripulación continúan en la lucha contra las máquinas que han esclavizado a la raza humana. Ahora más humanos han sido despertados e intentan vivir en el mundo real. A medida que aumentan en número, la batalla se acerca a Sion, la última ciudad real en el mundo y centro de la resistencia humana. Y tiene poco tiempo, muy poco tiempo... "
    },
    {
        "name": "Bob Esponja",
        "genre": "popular",
        "desc": "Cuando alguien rapta a Gary, Bob Esponja y Patricio se embarcan en una alocada misión muy lejos de Fondo de Bikini para rescatar a su fiel amigo caracol. "
    },
    {
        "name": "Spiderman",
        "genre": "popular",
        "desc": "Tras la picadura de una araña potenciada genéticamente, el tímido Peter Parker recibe superpoderes para combatir la injusticia y enfrentar a un vengativo supervillano. "
    },
    {
        "name": "Naruto",
        "genre": "anime",
        "desc": "guiado por el espiritu demoniaco que hay en el, el huerfano naruto aprende a controlar sus poderes como un ninja en esta serie de aventura "
    },
    {
        "name": "Pokémon",
        "genre": "anime",
        "desc": "Emprende el viaje hacia el mundo Pokémon en compañia de Ash Ketchum y su inseparable amigo Pikachu, mientras busca la gloria de convertirse en el mejor maestro Pokémon "

    },
    {
        "name": "Caballeros Del Zodiaco",
        "genre": "anime",
        "desc": "La historia nunca antes contada de la guerra santa entre el caballero pegaso, hades el dios del inframundo y la diosa Athena ha comenzado"
    },
    {
        "name": "Breaking Bad",
        "genre": "crimes",
        "desc": "Un profesor de química de escuela secundaria recurre a la venta de drogas para mantener a su familia"
    },
    {
        "name": "Arrow",
        "genre": "crimes",
        "desc": "Basado en las historietas de flecha verde, un próspero playboy se transforma en un superhéroe que salva a la ciudad de villanos, armado únicamente con un arco y flechas"
    },
    {
        "name": "El Chapo",
        "genre": "crimes",
        "desc": "Esta serie dramática narra la verdadera historia del ascenso la captura y la fuga del famoso lider del narcotrpafico mexicano Joaquin ''el Chapo'' Guzmán"
    },
   
]

const showDetails = (element, index) => {
    exampleModal.style.display = "block"
    const { name, genre, desc } = element
    detailContent.querySelector("h1").textContent = name
    detailContent.querySelector("img").src = `./images/${genre}/${index}.png`
    detailContent.querySelector("p").textContent = desc
}

const closeModal = () => {
    exampleModal.style.display = "none"
}

window.addEventListener('DOMContentLoaded', async () => {
    data.filter(item => item.genre === "popular").forEach((element, index) => {
        var cover = document.createElement("a")
        var image = document.createElement("img")
        // cover.setAttribute("data-bs-toggle", "modal")
        // cover.setAttribute("data-bs-target", "exampleModal")
        image.setAttribute("src", `./images/${element.genre}/${index}.png`)
        cover.appendChild(image)
        cover.onclick = () => showDetails(element, index)
        popular.appendChild(cover)
    })
    data.filter(item => item.genre === "anime").forEach((element, index) => {
        var cover = document.createElement("a")
        var image = document.createElement("img")
        image.setAttribute("src", `./images/${element.genre}/${index}.png`)
        cover.appendChild(image)
        cover.onclick = () => showDetails(element)
        animes.appendChild(cover)
    })
    data.filter(item => item.genre === "crimes").forEach((element, index) => {
        var cover = document.createElement("a")
        var image = document.createElement("img")
        image.setAttribute("src", `./images/${element.genre}/${index}.png`)
        cover.appendChild(image)
        cover.onclick = () => showDetails(element)
        crimes.appendChild(cover)
    })
    popularContent.appendChild(popular)
    animeContent.appendChild(animes)
    crimesContent.appendChild(crimes)
});