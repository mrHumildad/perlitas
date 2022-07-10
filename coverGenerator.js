const container = document.getElementsByClassName("container")
let nombres = ["Santi Sosa", "Max Bridas"]
const santiMax1 = document.getElementById("santiMax1")
const santiMax2 = document.getElementById("santiMax2")
let orden = Math.round(Math.random())
let primero = nombres[orden]
nombres.splice(orden, 1)
let segundo = nombres[0]
let one = document.createTextNode(primero)
let two = document.createTextNode(segundo)
santiMax1.appendChild(one)
santiMax2.appendChild(two)
const createNewCover = (pelicula)=> {
    let newCover = document.createElement("a")
    let newTitulo = document.createElement("h3")
    let newInfo = document.createElement("p")
    let img = "background-image: url(" + pelicula.img + ")" 
    newCover.classList.add("cover")
    newCover.setAttribute("style", img);
    newCover.setAttribute("href", pelicula.link)
    newTitulo.classList.add("titulo")
    newInfo.classList.add("info")
    let textoTitulo = document.createTextNode(pelicula.titulo);
    let info = pelicula.autor + " @ " + pelicula.ano
    let textoInfo = document.createTextNode(info);
    newTitulo.appendChild(textoTitulo)
    newInfo.appendChild(textoInfo)
    newCover.appendChild(newTitulo)
    newCover.appendChild(newInfo)
    return newCover
}
let frag = new DocumentFragment
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
shuffleArray(peliculas)
for (let i = 0; i < peliculas.length; i++) {
    const pelicula = peliculas[i];
    let c = createNewCover(pelicula);
    frag.appendChild(c)
}
container[0].append(frag)
