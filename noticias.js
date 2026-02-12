// Lista de noticias
const noticias = [
    { anime: "Naruto", titulo: "Nuevo arco de Naruto", contenido: "Naruto enfrenta a un nuevo enemigo...", imagen: "imagenes/naruto.jpg" },
    { anime: "Naruto", titulo: "Personajes secundarios destacados", contenido: "Analizamos los personajes secundarios de Naruto...", imagen: "imagenes/naruto.jpg" },
    { anime: "Attack on Titan", titulo: "Avance temporada 4", contenido: "Los titanes se acercan...", imagen: "imagenes/aot.jpg" },
    { anime: "Demon Slayer", titulo: "Nuevos personajes revelados", contenido: "Conoce a los cazadores...", imagen: "imagenes/demon.jpg" }
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