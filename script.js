let container = document.getElementById("container")
let pelicula = ["teste di cazzo", "nino nino", "2025"]
const coverPeli = (titulo, autor, año)=> {
    cover = document.createElement("a")
    cover.classList.add("cover")
    title = document.createElement("h3")
    title.classList.add("titulo")
    title.innerHTML(titulo)
    aut = document.createElement("p")
    aut.classList.add("info")
    aut.innerHTML(autor + " @ " + año)
    container.appendChild(cover)
}
coverPeli("teste di cazzo", "nino nino", "2025")
