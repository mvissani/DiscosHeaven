const discos = [
   {
    id: 0,
    img: "/img/TFJ-MATD.jpeg",
    titulo: "THE FAMILY JEWELS",
    color: "green",
    artista: "MARINA AND THE DIAMONDS",
    spotifyId: "linktfj",
    spotifyUrl: "https://open.spotify.com/album/3dWObfa3vKyudzgmh53Xzg", 
    precio: "4000",
    canciones: 13,
    año: 2010
  },
  {
    id: 1,
    img: "/img/EH-MATD.jpeg",
    titulo: "ELECTRA HEART",
    color: "pink",
    artista: "MARINA AND THE DIAMONDS",
    spotifyId: "linkeh",
    spotifyUrl: "https://open.spotify.com/album/49kf7gWWtReFwPcCNsvyUf",
    precio: "4000",
    canciones: 13,
    año: 2012
  },
  {
    id: 2,
    img: "/img/FROOT-MATD.jpeg",
    titulo: "FROOT",
    color: "purple",
    artista: "MARINA AND THE DIAMONDS",
    spotifyId: "linkfroot",
    spotifyUrl: "https://open.spotify.com/album/1u2ACTYzVNK3vSLG0Ah4H3",
    precio: "4000",
    canciones: 12,
    año: 2015
  },
  {
    id: 3,
    img: "/img/L+F-M.jpeg",
    titulo: "LOVE + FEAR",
    color: "grey",
    artista: "MARINA AND THE DIAMONDS",
    spotifyId: "linklf",
    spotifyUrl: "https://open.spotify.com/album/0CUxS3KfHNuDpUUjbAewV3",
    precio: "4000",
    canciones: 16,
    año: 2019
  },
  {
    id: 4,
    img: "/img/ADIAML-M.jpeg",
    titulo: "ANCIENT DREAMS IN A MODERN LAND",
    color: "lightblue",
    artista: "MARINA AND THE DIAMONDS",
    spotifyId: "linkadiaml",
    spotifyUrl: "https://open.spotify.com/album/5fa6oWFXuvaVkY49mfOsRd",
    precio: "4000",
    canciones: 10,
    año: 2021
  },
  {
    id: 5,
    img: "/img/DNA-LM.jpeg",
    titulo: "DNA",
    color: "magenta",
    artista: "LITTLE MIX",
    spotifyId: "linkdna",
    spotifyUrl: "https://open.spotify.com/album/0SHgpefjbVvnR2NnMPj1ve",
    precio: "4000",
    canciones: 12,
    año: 2012
  },
  {
    id: 6,
    img: "/img/SALUTE-LM.jpeg",
    titulo: "SALUTE",
    color: "lightgreen",
    artista: "LITTLE MIX",
    spotifyId: "linksalute",
    spotifyUrl: "https://open.spotify.com/album/06haetPrpbIFCY1FUWzVel",
    precio: "4000",
    canciones: 12,
    año: 2013
  },
  {
    id: 7,
    img: "/img/GW-LM.jpeg",
    titulo: "GET WEIRD",
    color: "yellow",
    artista: "LITTLE MIX",
    spotifyId: "linkgw",
    spotifyUrl: "https://open.spotify.com/album/4bzVI1FElc13HQagFR7S1W",
    precio: "4000",
    canciones: 12,
    año: 2015
  },
  {
    id: 8,
    img: "/img/GD-LM.jpeg",
    titulo: "GLORY DAYS",
    color: "rgb(214, 41, 142)",
    artista: "LITTLE MIX",
    spotifyId: "linkgd",
    spotifyUrl: "https://open.spotify.com/album/5DL2Z5x7UJsWH1HhE9j8nd",
    precio: "4000",
    canciones: 12,
    año: 2016
  },
  {
    id: 9,
    img: "/img/LM5-LM.jpeg",
    titulo: "LM5",
    color: "black",
    artista: "LITTLE MIX",
    spotifyId: "linklm5",
    spotifyUrl: "https://open.spotify.com/album/7Ho8gAx4haSxv1eFLQwvTj",
    precio: "4000",
    canciones: 14,
    año: 2018
  },
  {
    id: 10,
    img: "/img/CONFETTI-LM.jpeg",
    titulo: "CONFETTI",
    color: "grey",
    artista: "LITTLE MIX",
    spotifyId: "linkconfetti",
    spotifyUrl: "https://open.spotify.com/album/33a8Ha3pE7fo2o4T4xLabF",
    precio: "4000",
    canciones: 13,
    año: 2020
  },
  {
    id: 11,
    img: "/img/BU-LM.jpeg",
    titulo: "BETWEEN US",
    color: "brown",
    artista: "LITTLE MIX",
    spotifyId: "linkbu",
    spotifyUrl: "https://open.spotify.com/album/6XNrM2YkzSXyQ9hekFOgLN",
    precio: "4000",
    canciones: 22,
    año: 2021
  },
  {
    id: 12,
    img: "/img/DL-DL.jpeg",
    titulo: "DUA LIPA",
    color: "rgb(217, 70, 247)",
    artista: "DUA LIPA",
    spotifyId: "linkdl",
    spotifyUrl: "https://open.spotify.com/album/0obMz8EHnr3dg6NCUK4xWp",
    precio: "4000",
    canciones: 17,
    año: 2017
  },
  {
    id: 13,
    img: "/img/FN-DL.jpeg",
    titulo: "FUTURE NOSTALGIA",
    color: "rgb(253, 32, 180)",
    artista: "DUA LIPA",
    spotifyId: "linkfn",
    spotifyUrl: "https://open.spotify.com/album/7fJJK56U9fHixgO0HQkhtI",
    precio: "4000",
    canciones: 11,
    año: 2020
  },
  {
    id: 14,
    img: "/img/YT-AG.jpeg",
    titulo: "YOURS TRULY",
    color: "rgb(247, 167, 216)",
    artista: "ARIANA GRANDE",
    spotifyId: "linkyt",
    spotifyUrl: "https://open.spotify.com/album/6WQzwx2a6Wq6rDoEU3TaNE",
    precio: "4000",
    canciones: 12,
    año: 2013
  },
  {
    id: 15,
    img: "/img/ME-AG.jpeg",
    titulo: "MY EVERYTHING",
    color: "rgb(206, 111, 170)",
    artista: "ARIANA GRANDE",
    spotifyId: "linkme",
    spotifyUrl: "https://open.spotify.com/album/6EVYTRG1drKdO8OnIQBeEj",
    precio: "4000",
    canciones: 12,
    año: 2014
  },
  {
    id: 16,
    img: "/img/DW-AG.jpeg",
    titulo: "DANGEROUS WOMAN",
    color: "rgb(41, 41, 41)",
    artista: "ARIANA GRANDE",
    spotifyId: "linkdw",
    spotifyUrl: "https://open.spotify.com/album/3OZgEywV4krCZ814pTJWr7",
    precio: "4000",
    canciones: 11,
    año: 2016
  },
  {
    id: 17,
    img: "/img/SWEETENER-AG.jpeg",
    titulo: "SWEETENER",
    color: "rgb(184, 161, 58)",
    artista: "ARIANA GRANDE",
    spotifyId: "linksweetener",
    spotifyUrl: "https://open.spotify.com/album/3tx8gQqWbGwqIGZHqDNrGe",
    precio: "4000",
    canciones: 15,
    año: 2018
  },
  {
    id: 18,
    img: "/img/TUN-AG.jpeg",
    titulo: "THANK U, NEXT",
    color: "rgb(243, 102, 243)",
    artista: "ARIANA GRANDE",
    spotifyId: "linktun",
    spotifyUrl: "https://open.spotify.com/album/2fYhqwDWXjbpjaIJPEfKFw",
    precio: "4000",
    canciones: 12,
    año: 2019
  },
  {
    id: 19,
    img: "/img/POSITIONS-AG.jpeg",
    titulo: "POSITIONS",
    color: "rgb(109, 67, 91)",
    artista: "ARIANA GRANDE",
    spotifyId: "linkpositions",
    spotifyUrl: "https://open.spotify.com/album/74vajFwEwXJ61OW1DKSPEa",
    precio: "4000",
    canciones: 14,
    año: 2020
  },
  {
    id: 20,
    img: "/img/LUNGS-F+TM.jpeg",
    titulo: "LUNGS",
    color: "rgb(61, 60, 61)",
    artista: "FLORENCE + THE MACHINE",
    spotifyId: "linklungs",
    spotifyUrl: "https://open.spotify.com/album/2FgknX5e7fJlriQtxvpLhZ",
    precio: "4000",
    canciones: 13,
    año: 2009
  },
  {
    id: 21,
    img: "/img/CEREMONIALS-F+TM.jpeg",
    titulo: "CEREMONIALS",
    color: "rgb(122, 105, 37)",
    artista: "FLORENCE + THE MACHINE",
    spotifyId: "linkceremonials",
    spotifyUrl: "https://open.spotify.com/album/19J2iqK89BCrNG4El2FRi5",
    precio: "4000",
    canciones: 12,
    año: 2011
  },
  {
    id: 22,
    img: "/img/HBHBHB-F+TM.jpeg",
    titulo: "HOW BIG, HOW BLUE, HOW BEAUTIFUL",
    color: "rgb(61, 61, 60)",
    artista: "FLORENCE + THE MACHINE",
    spotifyId: "linkhbhbhb",
    spotifyUrl: "https://open.spotify.com/album/2jn2n5OkuHliOLKCqHnjXV",
    precio: "4000",
    canciones: 11,
    año: 2015
  },
  {
    id: 23,
    img: "/img/HAH-F+TM.jpeg",
    titulo: "HIGH AS HOPE",
    color: "rgb(122, 107, 47)",
    artista: "FLORENCE + THE MACHINE",
    spotifyId: "linkhah",
    spotifyUrl: "https://open.spotify.com/album/0pKZJj9GzcKPCS8r4IaksA",
    precio: "4000",
    canciones: 10,
    año: 2018
  },
  {
    id: 24,
    img: "/img/DF-F+TM.jpeg",
    titulo: "DANCE FEVER",
    color: "rgb(241, 147, 218)",
    artista: "FLORENCE + THE MACHINE",
    spotifyId: "linkdf",
    spotifyUrl: "https://open.spotify.com/album/4ohh1zQ4yybSK9FS7LLyDE",
    precio: "4000",
    canciones: 14,
    año: 2022
  },
  {
    id: 25,
    img: "/img/19-A.jpeg",
    titulo: "19",
    color: "rgb(177, 175, 92)",
    artista: "ADELE",
    spotifyId: "link19",
    spotifyUrl: "https://open.spotify.com/album/59ULskOkBMij4zL8pS7mi0",
    precio: "4000",
    canciones: 12,
    año: 2008
  },
  {
    id: 26,
    img: "/img/21-A.jpeg",
    titulo: "21",
    color: "rgb(128, 207, 74)",
    artista: "ADELE",
    spotifyId: "link21",
    spotifyUrl: "https://open.spotify.com/album/1azUkThwd2HfUDdeNeT147",
    precio: "4000",
    canciones: 11,
    año: 2011
  },
  {
    id: 27,
    img: "/img/25-A.jpeg",
    titulo: "25",
    color: "rgb(100, 99, 54)",
    artista: "ADELE",
    spotifyId: "link25",
    spotifyUrl: "https://open.spotify.com/album/0K4pIOOsfJ9lK8OjrZfXzd",
    precio: "4000",
    canciones: 11,
    año: 2015
  },
  {
    id: 28,
    img: "/img/30-A.jpeg",
    titulo: "30",
    color: "rgb(197, 195, 42)",
    artista: "ADELE",
    spotifyId: "link30",
    spotifyUrl: "https://open.spotify.com/album/21jF5jlMtzo94wbxmJ18aa",
    precio: "4000",
    canciones: 12,
    año: 2021
  },
  {
    id: 29,
    img: "/img/BTD-LDR.jpeg",
    titulo: "BORN TO DIE",
    color: "rgb(80, 154, 163)",
    artista: "LANA DEL REY",
    spotifyId: "linkbtd",
    spotifyUrl: "https://open.spotify.com/album/4F5dVhgk569Du5cLfal3t5",
    precio: "4000",
    canciones: 12,
    año: 2012
  },
  {
    id: 30,
    img: "/img/POP-M.jpg",
    titulo: "PRINCESS OF POWER",
    color: "rgba(80, 179, 139, 1)",
    artista: "MARINA",
    spotifyId: "linkpop",
    spotifyUrl: "https://open.spotify.com/album/2rjfRdmVDBMFT5mamSsVeU",
    precio: "10000",
    canciones: 13,
    año: 2025
  },
  {
    id: 31,
    img: "/img/ES-AG.jpg",
    titulo: "ETERNAL SUNSHINE",
    color: "rgba(180, 33, 13, 1)",
    artista: "ARIANA GRANDE",
    spotifyId: "linkes",
    spotifyUrl: "https://open.spotify.com/album/5EYKrEDnKhhcNxGedaRQeK",
    precio: "10000",
    canciones: 13,
    año: 2024
  },
  {
    id: 32,
    img: "/img/RO-DL.jpg",
    titulo: "RADICAL OPTIMISM",
    color: "rgba(126, 248, 250, 1)",
    artista: "DUA LIPA",
    spotifyId: "linkro",
    spotifyUrl: "https://open.spotify.com/album/1Mo92916G2mmG7ajpmSVrc",
    precio: "10000",
    canciones: 11,
    año: 2024
  },
  {
    id: 33,
    img: "/img/BELE-I.jpg",
    titulo: "BESOS EN LA ESPALDA",
    color: "rgba(255, 149, 225, 1)",
    artista: "INDIOS",
    spotifyId: "linkbele",
    spotifyUrl: "https://open.spotify.com/album/",
    precio: "10000",
    canciones: 12,
    año: 2019
  },
  {
    id: 34,
    img: "/img/EBB-BC.jpg",
    titulo: "EL BIG BLUE",
    color: "rgba(88, 202, 255, 1)",
    artista: "BANDALOS CHINOS",
    spotifyId: "linkebb",
    spotifyUrl: "https://open.spotify.com/album/",
    precio: "10000",
    canciones: 12,
    año: 2022
  },
];


// Codigo funcional 

const carreteWrapper = document.querySelector(".carrete-wrapper");
const carrete = document.getElementById("carrete");
const btnIzq = document.getElementById("izquierda");
const btnDer = document.getElementById("derecha");

discos.forEach(disco => {
  const div = document.createElement("div");
  div.className = "disco";
  div.innerHTML = `
    <img src="${disco.img}" alt="${disco.titulo}">
    <div class="disco-info">
      <strong>${disco.titulo}</strong><br>
      <em>${disco.artista}</em>
    </div>
  `;
  carrete.appendChild(div);
});

let velocidad = 1;
let isHover = false;

// Duplicar discos para loop infinito
carrete.innerHTML += carrete.innerHTML;

// Auto-scroll
function autoScroll() {
  if (!isHover) {
    carreteWrapper.scrollLeft += velocidad;

    // Loop infinito
    if (carreteWrapper.scrollLeft >= carrete.scrollWidth / 2) {
      carreteWrapper.scrollLeft = 0;
    }
  }
  requestAnimationFrame(autoScroll);
}

// Pausar auto-scroll al interactuar
carreteWrapper.addEventListener("mouseenter", () => isHover = true);
carreteWrapper.addEventListener("mouseleave", () => isHover = false);

// Flechas
izquierda.addEventListener("click", () => {
  isHover = true;
  carreteWrapper.scrollLeft -= carreteWrapper.clientWidth * 0.7;
  if (carreteWrapper.scrollLeft < 0) {
    carreteWrapper.scrollLeft += carrete.scrollWidth / 2;
  }
  setTimeout(() => isHover = false, 500);
});

derecha.addEventListener("click", () => {
  isHover = true;
  carreteWrapper.scrollLeft += carreteWrapper.clientWidth * 0.7;
  if (carreteWrapper.scrollLeft >= carrete.scrollWidth / 2) {
    carreteWrapper.scrollLeft = 0;
  }
  setTimeout(() => isHover = false, 500);
});

requestAnimationFrame(autoScroll);






const wrapper = document.querySelector(".carrete-wrapper");
//const discos = document.querySelectorAll(".disco");

function actualizarActivo() {
  const wrapperCenter = wrapper.scrollLeft + wrapper.offsetWidth / 2;

  discos.forEach(disco => {
    const discoCenter = disco.offsetLeft + disco.offsetWidth / 2;
    const distancia = Math.abs(wrapperCenter - discoCenter);

    if(distancia < disco.offsetWidth / 2) {
      disco.classList.add("activo");
      // Centrar el disco
      wrapper.scrollTo({
        left: disco.offsetLeft - (wrapper.offsetWidth/2 - disco.offsetWidth/2),
        behavior: 'smooth'
      });
    } else {
      disco.classList.remove("activo");
    }
  });
}
