// Lista de noticias
const noticias = [
    { anime: "Naruto", titulo: "Subidos 3 capítulos de Naruto", contenido: "3 primeros capítulos subidos", imagen: "imagenes/narutoog.jpg" },
    { anime: "Attack on Titan", titulo: "Ningún capítulo subido", contenido: "Próximamente...", imagen: "imagenes/aot.jpg" },
    { anime: "Demon Slayer", titulo: "Ningún capítulo subido", contenido: "Próximamente...", imagen: "imagenes/demon.jpg" }
];

// Detectar filtro de query string
const urlParams = new URLSearchParams(window.location.search);
const filtroAnime = urlParams.get('anime'); // Ej: "Naruto"

const noticiasContainer = document.getElementById("noticiasContainer");

// Filtrar noticias
const noticiasFiltradas = filtroAnime 
    ? noticias.filter(n => n.anime === filtroAnime)
    : noticias; // Si no hay filtro, todas

// Mostrar noticias
noticiasFiltradas.forEach(n => {
    const div = document.createElement("div");
    div.classList.add("noticia-card");
    div.innerHTML = `
        <img src="${n.imagen}" alt="${n.anime}">
        <h3>${n.titulo}</h3>
        <p>${n.contenido}</p>
    `;
    noticiasContainer.appendChild(div);
});