const btnSi = document.getElementById("si");
const btnNo = document.getElementById("no");
const caja = document.querySelector(".caja");
const musica = document.getElementById("musica");

const frases = [
    "¿Segura?",
    "Piénsalo bien...",
    "¿De verdad?",
    "Dame una oportunidad...",
    "Prometo hacerlo mejor ❤️",
    "No seas tan cruel 🥺",
    "Solo una oportunidad...",
    "Por favor 💜",
    "Última oportunidad...",
    "Ya no puedes escapar 😅",
    "El botón 'Sí' se ve mejor 😉"
];

let indice = 0;
let escala = 1;
let musicaIniciada = false;


// Iniciar música con cualquier toque
function iniciarMusica(){

    if(!musicaIniciada){

        musica.play()
        .then(()=>{
            musicaIniciada = true;
        })
        .catch(()=>{});

    }

}


document.addEventListener("click", iniciarMusica);
document.addEventListener("touchstart", iniciarMusica);


// Botón NO

btnNo.addEventListener("click",()=>{

    if(indice < frases.length){

        btnNo.textContent = frases[indice];
        indice++;

    }else{

        btnNo.style.display = "none";

    }


    escala += 0.25;

    btnSi.style.transform = `scale(${escala})`;


    if(escala > 3){

        btnSi.style.width = "100%";

    }

});



// Botón SÍ

btnSi.addEventListener("click",()=>{


    caja.innerHTML = `

    <div class="final">

        <h1>
        Sabía que sí 💜
        </h1>


        <p>
        Prometo cuidarte, hacerte sonreír
        y demostrarte cada día
        que valió la pena decir que sí. ❤️
        </p>


    </div>

    `;


    lanzarCorazones();


});



// Corazones

function lanzarCorazones(){


    const emojis = [
        "💜",
        "❤️",
        "💕",
        "💖",
        "💗",
        "💞"
    ];


    setInterval(()=>{


        const corazon = document.createElement("div");


        corazon.className = "corazon";


        corazon.innerHTML =
        emojis[Math.floor(Math.random()*emojis.length)];



        corazon.style.left =
        Math.random()*100 + "vw";


        corazon.style.fontSize =
        (20 + Math.random()*30) + "px";



        corazon.style.animationDuration =
        (3 + Math.random()*2) + "s";



        document.body.appendChild(corazon);



        setTimeout(()=>{

            corazon.remove();

        },5000);



    },150);


}



// Pausar música al salir o cambiar pestaña

document.addEventListener("visibilitychange",()=>{


    if(document.hidden){

        musica.pause();

    }else if(musicaIniciada){

        musica.play().catch(()=>{});

    }


});


// Pausar al cerrar la página

window.addEventListener("pagehide",()=>{

    musica.pause();

});
