window.onload = function()
{ 
  // Array de discos
  const discos = [
  {
    img: "/img/TFJ-MATD.jpeg",
    titulo: "THE FAMILY JEWELS",
    color: "green",
    artista: "MARINA AND THE DIAMONDS",
    spotifyId: "linktfj",
    spotifyUrl: "https://open.spotify.com/album/3dWObfa3vKyudzgmh53Xzg", 
    precio: "$4.000",
    canciones: 13,
    año: 2010
  },
  {
    img: "/img/EH-MATD.jpeg",
    titulo: "ELECTRA HEART",
    color: "pink",
    artista: "MARINA AND THE DIAMONDS",
    spotifyId: "linkeh",
    spotifyUrl: "https://open.spotify.com/album/49kf7gWWtReFwPcCNsvyUf",
    precio: "$4.000",
    canciones: 13,
    año: 2012
  },
  {
    img: "/img/FROOT-MATD.jpeg",
    titulo: "FROOT",
    color: "purple",
    artista: "MARINA AND THE DIAMONDS",
    spotifyId: "linkfroot",
    spotifyUrl: "https://open.spotify.com/album/1u2ACTYzVNK3vSLG0Ah4H3",
    precio: "$4.000",
    canciones: 12,
    año: 2015
  },
  {
    img: "/img/L+F-M.jpeg",
    titulo: "LOVE + FEAR",
    color: "grey",
    artista: "MARINA AND THE DIAMONDS",
    spotifyId: "linklf",
    spotifyUrl: "https://open.spotify.com/album/0CUxS3KfHNuDpUUjbAewV3",
    precio: "$4.000",
    canciones: 16,
    año: 2019
  },
  {
    img: "/img/ADIAML-M.jpeg",
    titulo: "ANCIENT DREAMS IN A MODERN LAND",
    color: "lightblue",
    artista: "MARINA AND THE DIAMONDS",
    spotifyId: "linkadiaml",
    spotifyUrl: "https://open.spotify.com/album/5fa6oWFXuvaVkY49mfOsRd",
    precio: "$4.000",
    canciones: 10,
    año: 2021
  },
  {
    img: "/img/DNA-LM.jpeg",
    titulo: "DNA",
    color: "magenta",
    artista: "LITTLE MIX",
    spotifyId: "linkdna",
    spotifyUrl: "https://open.spotify.com/album/0SHgpefjbVvnR2NnMPj1ve",
    precio: "$4.000",
    canciones: 12,
    año: 2012
  },
  {
    img: "/img/SALUTE-LM.jpeg",
    titulo: "SALUTE",
    color: "lightgreen",
    artista: "LITTLE MIX",
    spotifyId: "linksalute",
    spotifyUrl: "https://open.spotify.com/album/06haetPrpbIFCY1FUWzVel",
    precio: "$4.000",
    canciones: 12,
    año: 2013
  },
  {
    img: "/img/GW-LM.jpeg",
    titulo: "GET WEIRD",
    color: "yellow",
    artista: "LITTLE MIX",
    spotifyId: "linkgw",
    spotifyUrl: "https://open.spotify.com/album/4bzVI1FElc13HQagFR7S1W",
    precio: "$4.000",
    canciones: 12,
    año: 2015
  },
  {
    img: "/img/GD-LM.jpeg",
    titulo: "GLORY DAYS",
    color: "rgb(214, 41, 142)",
    artista: "LITTLE MIX",
    spotifyId: "linkgd",
    spotifyUrl: "https://open.spotify.com/album/5DL2Z5x7UJsWH1HhE9j8nd",
    precio: "$4.000",
    canciones: 12,
    año: 2016
  },
  {
    img: "/img/LM5-LM.jpeg",
    titulo: "LM5",
    color: "black",
    artista: "LITTLE MIX",
    spotifyId: "linklm5",
    spotifyUrl: "https://open.spotify.com/album/7Ho8gAx4haSxv1eFLQwvTj",
    precio: "$4.000",
    canciones: 14,
    año: 2018
  },
  {
    img: "/img/CONFETTI-LM.jpeg",
    titulo: "CONFETTI",
    color: "grey",
    artista: "LITTLE MIX",
    spotifyId: "linkconfetti",
    spotifyUrl: "https://open.spotify.com/album/33a8Ha3pE7fo2o4T4xLabF",
    precio: "$4.000",
    canciones: 13,
    año: 2020
  },
  {
    img: "/img/BU-LM.jpeg",
    titulo: "BETWEEN US",
    color: "brown",
    artista: "LITTLE MIX",
    spotifyId: "linkbu",
    spotifyUrl: "https://open.spotify.com/album/6XNrM2YkzSXyQ9hekFOgLN",
    precio: "$4.000",
    canciones: 22,
    año: 2021
  },
  {
    img: "/img/DL-DL.jpeg",
    titulo: "DUA LIPA",
    color: "rgb(217, 70, 247)",
    artista: "DUA LIPA",
    spotifyId: "linkdl",
    spotifyUrl: "https://open.spotify.com/album/0obMz8EHnr3dg6NCUK4xWp",
    precio: "$4.000",
    canciones: 17,
    año: 2017
  },
  {
    img: "/img/FN-DL.jpeg",
    titulo: "FUTURE NOSTALGIA",
    color: "rgb(253, 32, 180)",
    artista: "DUA LIPA",
    spotifyId: "linkfn",
    spotifyUrl: "https://open.spotify.com/album/7fJJK56U9fHixgO0HQkhtI",
    precio: "$4.000",
    canciones: 11,
    año: 2020
  },
  {
    img: "/img/YT-AG.jpeg",
    titulo: "YOURS TRULY",
    color: "rgb(247, 167, 216)",
    artista: "ARIANA GRANDE",
    spotifyId: "linkyt",
    spotifyUrl: "https://open.spotify.com/album/6WQzwx2a6Wq6rDoEU3TaNE",
    precio: "$4.000",
    canciones: 12,
    año: 2013
  },
  {
    img: "/img/ME-AG.jpeg",
    titulo: "MY EVERYTHING",
    color: "rgb(206, 111, 170)",
    artista: "ARIANA GRANDE",
    spotifyId: "linkme",
    spotifyUrl: "https://open.spotify.com/album/6EVYTRG1drKdO8OnIQBeEj",
    precio: "$4.000",
    canciones: 12,
    año: 2014
  },
  {
    img: "/img/DW-AG.jpeg",
    titulo: "DANGEROUS WOMAN",
    color: "rgb(41, 41, 41)",
    artista: "ARIANA GRANDE",
    spotifyId: "linkdw",
    spotifyUrl: "https://open.spotify.com/album/3OZgEywV4krCZ814pTJWr7",
    precio: "$4.000",
    canciones: 11,
    año: 2016
  },
  {
    img: "/img/SWEETENER-AG.jpeg",
    titulo: "SWEETENER",
    color: "rgb(184, 161, 58)",
    artista: "ARIANA GRANDE",
    spotifyId: "linksweetener",
    spotifyUrl: "https://open.spotify.com/album/3tx8gQqWbGwqIGZHqDNrGe",
    precio: "$4.000",
    canciones: 15,
    año: 2018
  },
  {
    img: "/img/TUN-AG.jpeg",
    titulo: "THANK U, NEXT",
    color: "rgb(243, 102, 243)",
    artista: "ARIANA GRANDE",
    spotifyId: "linktun",
    spotifyUrl: "https://open.spotify.com/album/2fYhqwDWXjbpjaIJPEfKFw",
    precio: "$4.000",
    canciones: 12,
    año: 2019
  },
  {
    img: "/img/POSITIONS-AG.jpeg",
    titulo: "POSITIONS",
    color: "rgb(109, 67, 91)",
    artista: "ARIANA GRANDE",
    spotifyId: "linkpositions",
    spotifyUrl: "https://open.spotify.com/album/74vajFwEwXJ61OW1DKSPEa",
    precio: "$4.000",
    canciones: 14,
    año: 2020
  },
  {
    img: "/img/LUNGS-F+TM.jpeg",
    titulo: "LUNGS",
    color: "rgb(61, 60, 61)",
    artista: "FLORENCE + THE MACHINE",
    spotifyId: "linklungs",
    spotifyUrl: "https://open.spotify.com/album/2FgknX5e7fJlriQtxvpLhZ",
    precio: "$4.000",
    canciones: 13,
    año: 2009
  },
  {
    img: "/img/CEREMONIALS-F+TM.jpeg",
    titulo: "CEREMONIALS",
    color: "rgb(122, 105, 37)",
    artista: "FLORENCE + THE MACHINE",
    spotifyId: "linkceremonials",
    spotifyUrl: "https://open.spotify.com/album/19J2iqK89BCrNG4El2FRi5",
    precio: "$4.000",
    canciones: 12,
    año: 2011
  },
  {
    img: "/img/HBHBHB-F+TM.jpeg",
    titulo: "HOW BIG, HOW BLUE, HOW BEAUTIFUL",
    color: "rgb(61, 61, 60)",
    artista: "FLORENCE + THE MACHINE",
    spotifyId: "linkhbhbhb",
    spotifyUrl: "https://open.spotify.com/album/2jn2n5OkuHliOLKCqHnjXV",
    precio: "$4.000",
    canciones: 11,
    año: 2015
  },
  {
    img: "/img/HAH-F+TM.jpeg",
    titulo: "HIGH AS HOPE",
    color: "rgb(122, 107, 47)",
    artista: "FLORENCE + THE MACHINE",
    spotifyId: "linkhah",
    spotifyUrl: "https://open.spotify.com/album/0pKZJj9GzcKPCS8r4IaksA",
    precio: "$4.000",
    canciones: 10,
    año: 2018
  },
  {
    img: "/img/DF-F+TM.jpeg",
    titulo: "DANCE FEVER",
    color: "rgb(241, 147, 218)",
    artista: "FLORENCE + THE MACHINE",
    spotifyId: "linkdf",
    spotifyUrl: "https://open.spotify.com/album/4ohh1zQ4yybSK9FS7LLyDE",
    precio: "$4.000",
    canciones: 14,
    año: 2022
  },
  {
    img: "/img/19-A.jpeg",
    titulo: "19",
    color: "rgb(177, 175, 92)",
    artista: "ADELE",
    spotifyId: "link19",
    spotifyUrl: "https://open.spotify.com/album/59ULskOkBMij4zL8pS7mi0",
    precio: "$4.000",
    canciones: 12,
    año: 2008
  },
  {
    img: "/img/21-A.jpeg",
    titulo: "21",
    color: "rgb(128, 207, 74)",
    artista: "ADELE",
    spotifyId: "link21",
    spotifyUrl: "https://open.spotify.com/album/1azUkThwd2HfUDdeNeT147",
    precio: "$4.000",
    canciones: 11,
    año: 2011
  },
  {
    img: "/img/25-A.jpeg",
    titulo: "25",
    color: "rgb(100, 99, 54)",
    artista: "ADELE",
    spotifyId: "link25",
    spotifyUrl: "https://open.spotify.com/album/0K4pIOOsfJ9lK8OjrZfXzd",
    precio: "$4.000",
    canciones: 11,
    año: 2015
  },
  {
    img: "/img/30-A.jpeg",
    titulo: "30",
    color: "rgb(197, 195, 42)",
    artista: "ADELE",
    spotifyId: "link30",
    spotifyUrl: "https://open.spotify.com/album/21jF5jlMtzo94wbxmJ18aa",
    precio: "$4.000",
    canciones: 12,
    año: 2021
  },
  {
    img: "/img/BTD-LDR.jpeg",
    titulo: "BORN TO DIE",
    color: "rgb(80, 154, 163)",
    artista: "LANA DEL REY",
    spotifyId: "linkbtd",
    spotifyUrl: "https://open.spotify.com/album/4F5dVhgk569Du5cLfal3t5",
    precio: "$4.000",
    canciones: 12,
    año: 2012
  }
  ];

  // Generar el HTML generico de los discos
  const contenedor = document.getElementById('contenedor-discos');
  contenedor.innerHTML = discos.map(disco => `
    <div class="disco">
      <img class="portada" src="${disco.img}" alt="${disco.titulo}">
      <p class="titulo" style="color: ${disco.color}">${disco.titulo}</p>
      <p class="artista"><strong>${disco.artista}</strong></p>
      <a class="spotify" id="${disco.spotifyId}" href="${disco.spotifyUrl}" target="_blank" rel="noopener">
        <i class="fa-brands fa-spotify"></i>
      </a>
      <span class="detalles">
        <p class="precio">${disco.precio}</p>
        <p class="totalcanciones">Cantidad de canciones: ${disco.canciones}</p>
        <p class="año">Año: ${disco.año}</p>
        <input class="comprar" type="button" value="Comprar">
      </span>
    </div>
  `).join('');

  // Mostrar solo el detalle del disco clickeado
  document.querySelectorAll('.disco').forEach(disco => {
    disco.addEventListener('click', function(e) {
      if (e.target.classList.contains('comprar') || e.target.classList.contains('fa-spotify')) return;
      // Quita la clase activo de todos
      document.querySelectorAll('.disco').forEach(d => d.classList.remove('activo'));
      // Oculta todos los detalles
      document.querySelectorAll('.detalles').forEach(det => det.style.display = 'none');
      // Activa solo este disco y muestra su detalle
      this.classList.add('activo');
      const detalles = this.querySelector('.detalles');
      if (detalles) detalles.style.display = 'block';
      e.stopPropagation();
    });
  });

// Detectar doble click en la imagen para cerrar detalles
document.querySelectorAll('.disco .portada').forEach(img => {
  img.addEventListener('dblclick', function(e) {
    const disco = this.closest('.disco');
    if (disco.classList.contains('activo')) {
      disco.classList.remove('activo');
      disco.querySelector('.detalles').style.display = 'none';
    }
    e.stopPropagation(); 
  });
});

  // Oculta los detalles si haces click fuera de los discos
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.disco')) {
      document.querySelectorAll('.disco').forEach(d => d.classList.remove('activo'));
      document.querySelectorAll('.detalles').forEach(det => det.style.display = 'none');
    }
  });
}

// Buscador de discos o artistas

document.addEventListener('DOMContentLoaded', () => {
  const inputBusqueda = document.getElementById('busqueda');
  const contenedorDiscos = document.getElementById('contenedor-discos');

  inputBusqueda.addEventListener('input', () => {
    const filtro = inputBusqueda.value.toLowerCase();

    const discos = contenedorDiscos.querySelectorAll('.disco');

    discos.forEach(disco => {
      const titulo = disco.querySelector('.titulo').textContent.toLowerCase();
      const artista = disco.querySelector('.artista').textContent.toLowerCase();

      if (titulo.includes(filtro) || artista.includes(filtro)) {
        disco.style.display = 'flex'; 
      } else {
        disco.style.display = 'none';
      }
    });
  });
});