// Datos de ejemplo
const animes = [
    {
        nombre: "Naruto",
        descripcion: "Historia de Naruto Uzumaki, un ninja joven con un sueño...",
        imagen: "imagenes/narutoog.jpg",
        temporadas: [
            {
                nombre: "Temporada 1",
                capitulos: [
                    { 
                        titulo: "Capítulo 1", 
                        video: "https://drive.google.com/file/d/10o9OwfwLBBpdmJIb1uzmx7b1vo9hd2LE/preview", 
                        descripcion: "Naruto conoce a sus compañeros..." 
                    },
                    { 
                        titulo: "Capítulo 2", 
                        video: "https://mixdrop.co/e/4dmd6o8pcx07kd", 
                        descripcion: "Naruto enfrenta su primer reto..." 
                    },
                    { 
                        titulo: "Capítulo 3", 
                        video: "https://mixdrop.co/e/8lqlk98rtk0dwl", 
                        descripcion: "Naruto enfrenta nuevos desafíos..." 
                    },
                ]
            },
        ]
    },
    {
        nombre: "Attack on Titan",
        descripcion: "Humanidad lucha contra gigantes devoradores...",
        imagen: "imagenes/aot.jpg",
        temporadas: [
            {
                nombre: "Temporada 1",
                capitulos: [
                    { 
                        titulo: "Capítulo 1", 
                        video: "https://mega.nz/file/exampleAOT#enlace-publico", 
                        descripcion: "Comienza la invasión de los titanes..." 
                    }
                ]
            }
        ]
    },
    {
        nombre: "Demon Slayer",
        descripcion: "Tanjiro lucha contra demonios para salvar a su hermana...",
        imagen: "imagenes/demon.jpg",
        temporadas: [
            {
                nombre: "Temporada 1",
                capitulos: [
                    { 
                        titulo: "Capítulo 1", 
                        video: "https://mega.nz/file/exampleDemon#enlace-publico", 
                        descripcion: "Tanjiro comienza su entrenamiento..." 
                    }
                ]
            }
        ]
    }
];

let animeActual = null;
let temporadaActual = null;
let capituloActualIndex = null;

// Contenedores
const animeContainer = document.getElementById("animeContainer");
const temporadasContainer = document.getElementById("temporadasContainer");
const capitulosContainer = document.getElementById("capitulosContainer");
const reproductorSection = document.getElementById("reproductorSection");
const videoPlayer = document.getElementById("videoPlayer");
const tituloCapitulo = document.getElementById("tituloCapitulo");
const descripcionCapitulo = document.getElementById("descripcionCapitulo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Mostrar todos los animes
function mostrarAnimes() {
    animeContainer.innerHTML = "";
    animeContainer.style.display = "flex";
    temporadasContainer.style.display = "none";
    capitulosContainer.style.display = "none";
    reproductorSection.style.display = "none";

    animes.forEach((anime) => {
        const div = document.createElement("div");
        div.classList.add("anime-card");
        div.innerHTML = `
            <img src="${anime.imagen}" alt="${anime.nombre}">
            <div class="overlay"><h3>${anime.nombre}</h3></div>
        `;
        div.onclick = () => mostrarTemporadas(anime);
        animeContainer.appendChild(div);
    });
}

// Mostrar temporadas
function mostrarTemporadas(anime) {
    animeActual = anime;
    animeContainer.style.display = "none";
    temporadasContainer.style.display = "flex";
    capitulosContainer.style.display = "none";
    reproductorSection.style.display = "none";

    temporadasContainer.innerHTML = "";
    anime.temporadas.forEach((temp) => {
        const div = document.createElement("div");
        div.classList.add("anime-card");
        div.innerHTML = `<div class="overlay"><h3>${temp.nombre}</h3></div>`;
        div.onclick = () => mostrarCapitulos(temp);
        temporadasContainer.appendChild(div);
    });
}

// Mostrar capítulos
function mostrarCapitulos(temp) {
    temporadaActual = temp;
    temporadasContainer.style.display = "none";
    capitulosContainer.style.display = "flex";
    reproductorSection.style.display = "none";

    capitulosContainer.innerHTML = "";
    temp.capitulos.forEach((cap, i) => {
        const div = document.createElement("div");
        div.classList.add("anime-card");
        div.innerHTML = `<div class="overlay"><h3>${cap.titulo}</h3></div>`;
        div.onclick = () => mostrarCapitulo(i);
        capitulosContainer.appendChild(div);
    });
}

// Mostrar capítulo en reproductor usando iframe
function mostrarCapitulo(index) {
    capituloActualIndex = index;
    capitulosContainer.style.display = "none";
    reproductorSection.style.display = "block";

    const cap = temporadaActual.capitulos[index];

    videoPlayer.src = cap.video;
    videoPlayer.load();
    tituloCapitulo.textContent = cap.titulo;
    descripcionCapitulo.textContent = cap.descripcion;
}

// Botones siguiente / anterior
nextBtn.onclick = () => {
    if (capituloActualIndex < temporadaActual.capitulos.length - 1) {
        mostrarCapitulo(capituloActualIndex + 1);
    }
};

prevBtn.onclick = () => {
    if (capituloActualIndex > 0) {
        mostrarCapitulo(capituloActualIndex - 1);
    }
};

// Inicializar
mostrarAnimes();