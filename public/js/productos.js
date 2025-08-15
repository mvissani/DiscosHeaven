window.onload = function () {
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
    img: "/img/ES-AG.JPG",
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
    img: "/img/RO-DL.JPG",
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

// Elementos DOM
  const contenedor = document.getElementById('contenedor-discos');
  const carritoBtn = document.getElementById('carritoBtn');
  const modalCarrito = document.getElementById('modalCarrito');
  const carritoItems = document.getElementById('carritoItems');
  const cerrarCarrito = document.getElementById('cerrarCarrito');
  const contador = document.getElementById('carritoContador');

// Obtener referencias
const inputBusqueda = document.getElementById("busqueda");
const contenedorDiscos = document.getElementById("contenedor-discos");

// Evento de búsqueda en tiempo real
inputBusqueda.addEventListener("input", () => {
    const termino = inputBusqueda.value.toLowerCase();

    // Filtrar discos por título o artista
    const discosFiltrados = discos.filter(disco =>
        disco.titulo.toLowerCase().includes(termino) ||
        disco.artista.toLowerCase().includes(termino)
    );

    // Renderizar solo los discos filtrados
    mostrarDiscos(discosFiltrados);
});

  // Carrito
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Renderizar discos y asignar eventos
  function mostrarDiscos(listaDiscos) {
  contenedor.innerHTML = listaDiscos.map(disco => `
    <div class="disco" data-id="${disco.id}">
      <img class="portada" src="${disco.img}" alt="${disco.titulo}">
      <p class="titulo" style="color: ${disco.color}">${disco.titulo}</p>
      <p class="artista"><strong>${disco.artista}</strong></p>
      <a class="spotify" href="${disco.spotifyUrl}" target="_blank" rel="noopener">
        <i class="fa-brands fa-spotify"></i>
      </a>
      <span class="detalles" style="display:none;">
        <p class="precio">$${disco.precio.toLocaleString()}</p>
        <p class="totalcanciones">Cantidad de canciones: ${disco.canciones}</p>
        <p class="año">Año: ${disco.año}</p>
        <button class="comprar">Comprar</button>
      </span>
    </div>
  `).join('');

    // Reasignar eventos para mostrar detalles al click
  contenedor.querySelectorAll('.disco').forEach(discoDiv => {
    discoDiv.addEventListener('click', e => {
      if (e.target.classList.contains('comprar') || e.target.classList.contains('fa-spotify')) return;
      contenedor.querySelectorAll('.disco').forEach(d => {
        d.classList.remove('activo');
        d.querySelector('.detalles').style.display = 'none';
      });
      discoDiv.classList.add('activo');
      discoDiv.querySelector('.detalles').style.display = 'block';
    });
  });

  // Doble click en imagen cierra detalles
  contenedor.querySelectorAll('.disco .portada').forEach(img => {
    img.addEventListener('dblclick', e => {
      const discoDiv = e.target.closest('.disco');
      discoDiv.classList.remove('activo');
      discoDiv.querySelector('.detalles').style.display = 'none';
    });
  });
}

  // Cambia esta línea para usar mostrarDiscos:
  mostrarDiscos(discos);

  function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function actualizarContador() {
    let total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    contador.style.display = total > 0 ? 'inline-block' : 'none';
    contador.textContent = total;
  }

  function mostrarCarrito() {
  if (carrito.length === 0) {
    carritoItems.innerHTML = '<p>El carrito está vacío.</p>';
    subtotalCarrito.textContent = "";
    modalCarrito.style.display = 'flex'; // ocultamos contador si queda vacío
    return;
  }

    carritoItems.innerHTML = carrito.map(item => `
      <div class="item-carrito" style="border-bottom:1px solid #ccc; border-top: 1px solid #ccc; padding:10px 0; display: flex; align-items: center; gap: 10px;">
        <img src="${item.img}" alt="${item.titulo}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 4px;">
        <div>
          <p>${item.titulo}</p> 
          <p>${item.artista}</p>
          <p>Precio: $${item.precio.toLocaleString()}</p>
          <p>Cantidad: <input type="number" min="1" value="${item.cantidad}" class="cantidadInput" data-id="${item.id}"></p>
          <button class="eliminarBtn" data-id="${item.id}">Eliminar</button>
        </div>
      </div>
    `).join('');

carritoItems.addEventListener('input', e => {
  if (e.target.classList.contains('cantidadInput')) {
    const id = Number(e.target.dataset.id);
    const nuevaCantidad = Number(e.target.value);

    if (nuevaCantidad < 1) {
      // Evitar cantidad menor a 1
      e.target.value = 1;
      return;
    }

    // Actualizar la cantidad en el carrito
    const item = carrito.find(item => item.id === id);
    if (item) {
      item.cantidad = nuevaCantidad;
      guardarCarrito();
      actualizarContador();
      mostrarCarrito();
    }
  }
});
    
    // Calcular subtotal
    const subtotal = carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );

    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    subtotalCarrito.innerHTML = `<p> CANTIDAD: ${cantidadTotal} </p>
    <p> SUBTOTAL: $${subtotal.toLocaleString()}</p>`;

    modalCarrito.style.display = "flex";
  }

  const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  carritoItems.innerHTML += `
    <div style="border-top:1px solid #ccc; margin-top:10px; padding-top:10px; font-weight:bold;">
      Total items: ${totalCantidad} <br>
      Total a pagar: $${totalPrecio.toLocaleString()}
    </div>
  `;

  function mostrarMensaje(texto) {
    const mensaje = document.getElementById('mensajeFlotante');
    mensaje.textContent = texto;
    mensaje.classList.add('visible');
  
    setTimeout(() => {
      mensaje.classList.remove('visible');
    }, 2000);
  }

  function agregarAlCarrito(id) {
    const disco = discos.find(d => d.id === id);
    if (!disco) return;

    const itemExistente = carrito.find(item => item.id === id);
    if (itemExistente) {
      itemExistente.cantidad++;
    } else {
      carrito.push({
        id: disco.id,
        titulo: disco.titulo,
        artista: disco.artista,
        precio: disco.precio,
        img: disco.img,
        cantidad: 1
      });
    }
    guardarCarrito();
    actualizarContador();
    mostrarMensaje(`"${disco.titulo}" se agregó correctamente al carrito!`);
  }

  function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    guardarCarrito();
    actualizarContador();
    mostrarCarrito();
  }

  // Click en "Comprar"
  contenedor.addEventListener('click', e => {
    if (e.target.classList.contains('comprar')) {
      const discoDiv = e.target.closest('.disco');
      const id = Number(discoDiv.dataset.id);
      agregarAlCarrito(id);
    }
  });

  // Abrir modal
  carritoBtn.addEventListener('click', e => {
    e.preventDefault();
    mostrarCarrito();
  });

  // Cerrar modal
  cerrarCarrito.addEventListener('click', () => {
    modalCarrito.style.display = 'none';
  });

  cerrarCarrito.addEventListener('click', () => {
    modalCarrito.style.display = 'none';
    carritoItems.innerHTML = ''; // limpiar contenido
  });

  modalCarrito.addEventListener('click', e => {
    if (e.target === modalCarrito) {
      modalCarrito.style.display = 'none';
    }
  });

  // Eliminar dentro del modal
  carritoItems.addEventListener('click', e => {
    if (e.target.classList.contains('eliminarBtn')) {
      const id = Number(e.target.dataset.id);
      eliminarDelCarrito(id);
    }
  });
  
  // Click afuera cierra detalles
  document.addEventListener('click', e => {
    if (!e.target.closest('.disco')) {
      contenedor.querySelectorAll('.disco').forEach(d => {
        d.classList.remove('activo');
        d.querySelector('.detalles').style.display = 'none';
      });
    }
  });

  // Inicializar
  mostrarDiscos(discos);
  actualizarContador();
};
