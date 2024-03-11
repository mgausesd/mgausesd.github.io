
// Obtener referencia al botón y al div oculto
const boton = document.getElementById('boton-menu');
const divOculto = document.getElementById('mini-nav');
const footer = document.getElementById('footer-container');
const footerNav = document.getElementById('footer-nav');
const footerBio = document.getElementById('footer-bio');
const footerContacto = document.getElementById('footer-contacto');
// Función para cambiar el estado del div al hacer clic en el botón
boton.addEventListener('click', function() {
  if (divOculto.style.display === 'none') {
    divOculto.style.display = 'block';
  } else {
    divOculto.style.display = 'none';
  }
});

// Verificar el tamaño de la pantalla y mostrar u ocultar el botón según sea necesario
function verificarTamañoPantalla() {
  if (window.innerWidth <= 768) { // Cambia este valor según el tamaño deseado
    boton.style.display = 'block';
    divOculto.style.display = 'none';
    footer.style.display = 'flex';
    footer.style.flexDirection = 'column';
    footer.style.justifyContent = 'flex-start';
    footer.style.maxWidth='75%';
    footerNav.style.maxWidth = '90%';
    footerNav.style.minWidth = '90%';
    footerBio.style.maxWidth = '90%';
    footerBio.style.minWidth = '90%';
    footerContacto.style.maxWidth = '90%';
    footerContacto.style.minWidth = '90%';
  } else {
    boton.style.display = 'none';
    divOculto.style.display = 'none';
    footer.style.display = 'flex';
    footer.style.flexDirection = 'row';
    footer.style.justifyContent = 'center';
    footer.style.maxWidth='75%';
    footerNav.style.maxWidth = '30%';
    footerNav.style.minWidth = '30%';
    footerBio.style.maxWidth = '30%';
    footerBio.style.minWidth = '30%';
    footerContacto.style.maxWidth = '30%';
    footerContacto.style.minWidth = '30%';
  }
}

// Llamar a la función al cargar la página y al cambiar el tamaño de la ventana
verificarTamañoPantalla();
window.addEventListener('resize', verificarTamañoPantalla);

function submitReservation() {
  const checkinDate = document.getElementById('checkin').value;
  const checkoutDate = document.getElementById('checkout').value;
  const adults = document.getElementById('adults').value;
  const children = document.getElementById('children').value;

  // Aquí puedes hacer lo que quieras con la información de la reserva, como enviarla a un servidor o mostrarla en la página.
  console.log('Fecha de check-in:', checkinDate);
  console.log('Fecha de check-out:', checkoutDate);
  console.log('Adultos:', adults);
  console.log('Niños:', children);

  // Aquí puedes agregar la lógica adicional que necesites para procesar la reserva.
}
  
function checkAvailability() {
  const checkinDate = document.getElementById('checkin').value;
  const checkoutDate = document.getElementById('checkout').value;
  const adults = document.getElementById('adults').value;
  const children = document.getElementById('children').value;

  const baseUrl = "https://www.booking.com/hotel/es/borja.es-ES.html?aid=2311236&label=en-es-booking-desktop-qYWoV_Fr%2AprpBspmirVxfgS652828998709%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp1005545%3Ali%3Adec%3Adm&sid=749bac22b48e567b6c8ae18d84833bc9&atlas_src=sr_iw_btn;checkin=";
  
  const queryParams = `${checkinDate}`+";checkout="+`${checkoutDate}`+";dest_id=0;dist=0;group_adults="+`${adults}`+";group_children="+`${children}`+";no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&";
  //`checkin=${checkinDate}&checkout=${checkoutDate}&adults=${adults}&children=${children}`;
  const url = baseUrl + queryParams;

  // Abre una nueva pestaña del navegador con la URL construida
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
  // Establecer el idioma inicial
  let currentLanguage = 'es';
  updateTexts(currentLanguage);
  
  // Obtener el select para el cambio de idioma
  const languageSelect = document.getElementById('language-select');
  if (languageSelect) {
    languageSelect.addEventListener('change', changeLanguage);
  }

  //loader contacto
  setFormularioContacto();
});

function setFormularioContacto()
{
  var switch_contacto = document.getElementById('tipo-formulario-contacto-switch');
  var switch_contacto_boton_reservar = document.getElementById('boton-switch-formulario-reservar');
  var switch_contacto_boton_contacto = document.getElementById('boton-switch-formulario-contacto');
  var formulario_reserva = document.getElementById('formulario-reserva');
  var formulario_contacto = document.getElementById('formulario-contacto');

  if(switch_contacto!=null)
  {
    formulario_contacto.style.display='none';
    formulario_reserva.style.display='flex';

    switch_contacto_boton_reservar.style.backgroundColor='#333';
    switch_contacto_boton_reservar.style.color='#fff';

    switch_contacto_boton_contacto.style.backgroundColor='#fff';
    switch_contacto_boton_contacto.style.color='#333';
  }
}

function switchContactoClicked(button_id)
{
  var switch_contacto = document.getElementById('tipo-formulario-contacto-switch');
  var switch_contacto_boton_reservar = document.getElementById('boton-switch-formulario-reservar');
  var switch_contacto_boton_contacto = document.getElementById('boton-switch-formulario-otros');
  var formulario_reserva = document.getElementById('formulario-reserva');
  var formulario_contacto = document.getElementById('formulario-contacto');

  switch(button_id)
  {
    case 'boton-switch-formulario-reservar':
        formulario_reserva.style.display='flex';
        formulario_contacto.style.display='none';

        switch_contacto_boton_reservar.style.backgroundColor='#333';
        switch_contacto_boton_reservar.style.color='#fff';
    
        switch_contacto_boton_contacto.style.backgroundColor='#fff';
        switch_contacto_boton_contacto.style.color='#333';
        break;
    case 'boton-switch-formulario-otros':
      formulario_reserva.style.display='none';
      formulario_contacto.style.display='flex';

      switch_contacto_boton_reservar.style.backgroundColor='#fff';
      switch_contacto_boton_reservar.style.color='#333';
  
      switch_contacto_boton_contacto.style.backgroundColor='#333';
      switch_contacto_boton_contacto.style.color='#fff';
      break;
  }
}

function enviarEmail() {
  const datosFormulario = {
    nombre: document.getElementById('nombre').value,
    correo: document.getElementById('formulario-reserva-correo-input').value,
    mensaje: document.getElementById('mensaje').value
  };

  // Envía los datos al servidor
  fetch('/enviar-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosFormulario)
  })
  .then(response => {
    if (response.ok) {
      console.log('Correo electrónico enviado exitosamente');
      // Puedes hacer alguna acción adicional aquí, como mostrar un mensaje de éxito al usuario
    } else {
      console.error('Error al enviar el correo electrónico');
      // Puedes manejar errores aquí, como mostrar un mensaje de error al usuario
    }
  })
  .catch(error => {
    console.error('Error de red:', error);
    // Puedes manejar errores de red aquí, como mostrar un mensaje de error al usuario
  });
}
  
function changeLanguage() {
  const language = document.getElementById('language-select').value;
  updateTexts(language);
}

function updateTexts(language) {
  const elementsToUpdate = document.querySelectorAll('[data-text-key]');
  elementsToUpdate.forEach(element => {
    const textKey = element.getAttribute('data-text-key');
    if (texts[language][textKey]) {
      element.textContent = texts[language][textKey];
    }
  });
}

function onClickFaqButton(clickedId)
{
  var e = clickedId;
  var faqElements = obtenerDivsPorPatron();
  var elementNumber = e.substring(e.length-1);
  var element = document.getElementById("faqs-lista-element-content-"+elementNumber)
  var elementVisible = element.style.display;
  for (i = 0; i < faqElements.length; i++) {
    var elementLista = faqElements[i];
    elementLista.style.display='none';
  }
  if(elementVisible=='none')
  {
    element.style.display='block';

  }
}

function obtenerDivsPorPatron() {
  const divs = document.querySelectorAll('div[id^="faqs-lista-element-content-"]');
  return divs;
}

function ocultarElementos() {
  const elementos = document.querySelectorAll('div[id^="faqs-lista-element-content-"]');
  elementos.forEach(function(elemento) {
    elemento.style.display = 'none';
  });
}

function saberMasButtonClick(url)
{
  window.location.href = url;
}

// Llamar a la función cuando la ventana se haya cargado
window.addEventListener('load', ocultarElementos);

const texts = {
  "en": {
    "reserva-llegada": "Check-in",
    "reserva-salida": "Check-out",
    "reserva-adultos": "Adults",
    "reserva-ninos": "Children",
    "reserva-boton": "Check for availability",
    "bienvenida": "Welcome at Hotel Borja",
    "bienvenida-caption": "Your stay here is one-click far.",
    "welcome": "Welcome to our website!",
    "about": "About Us",
    "contact": "Contact Us",
    "inicio": "Home",
    "elhotel": "Hotel",
    "localidad": "Surroundings",
    "habitaciones": "Rooms",
    "contacto": "Contact us",
    "footer-bio": "Feel like home with us, surrounded by a pleasent location full of places ready to create memories.",
    "copyright": "2024 Hotel Borja. All rights reserved.",
    "footer-hotel-borja": "Hotel Borja",
    "encuentranos": "Find us",
    "sobre-nosotros": "About us",
    "legal": "Legal",
    "cookies": "Cookies and privacy",
    "short-hotel-titulo": "Heritage within a hotel",
    "short-hotel-parrafo-uno": "Comfortable, pleasant and calm defines our hotel, embedded in a small village as El Puig, ensures a pacific stay.",
    "short-hotel-parrafo-dos": "Family-runned hotel, our specialty is making our guests' stays a magnificent experience.",
    "short-hotel-button": "About our hotel",
    "short-localidad-titulo": "Cozy around here",
    "short-localidad-parrafo-uno": "Old town, sea-side and historic landmarks. perfect holidays check!.",
    "short-localidad-parrafo-dos": "El Puig has lots of great experiences to offer, Being well communicated by car and train and near from Valencia and the sea, makes this a perfect place for leisure.",
    "short-localidad-button": "El Puig & its surroundings",
    "short-localidad-button": "El Puig y alrededores",
    "short-habitaciones-titulo": "Rest peacefuly",
    "short-habitaciones-parrafo-uno": "Our hotel counts with a variety of room option. There is one for you, for sure.",
    "short-habitaciones-parrafo-dos": "All our rooms have amenities for your convenience.",
    "short-habitaciones-button": "The rooms",
    "faq-titulo-1": "Are pets allowed?",
    "faq-answer-1": "Yes, pets are allowed at Hotel Borja. Ask first with management before coming and we will attend you effectively",
    "faq-titulo-2": "Does the hotel have a parking lot?",
    "faq-answer-2": "Near the hotel is easy to park streetside.",
    "seccion-titulo-habitaciones":"Room types",
    "seccion-titulo-habitaciones-parrafo":"At Hotel Borja we count with an arrange of rooms of three kinds. Single, double and triple. \nExtra bed can be added too.",
    "tipo-habitacion-individual":"Single room",
    "tipo-habitacion-doble":"Double room",
    "tipo-habitacion-triple":"Triple room",
    "seccion-titulo-servicios":"Our services",
    "servicios-item-titulo-tarjeta":"Pay with credit card",
    "servicios-item-titulo-lavanderia":"Laundry",
    "servicios-item-titulo-wifi":"Wi-fi",
    "servicios-item-titulo-television":"Television",
    "servicios-item-titulo-atencion":"Kindness",
    "servicios-item-titulo-climatizacion":"Air conditioning",
    "servicios-item-parrafo-tarjeta":"Leave your cash at home, cards are welcomed here.",
    "servicios-item-parrafo-lavanderia":"We have discretional laundry service available",
    "servicios-item-parrafo-wifi":"Crawl the web from the comfort of your room and feel limitless.",
    "servicios-item-parrafo-television":"Tune in with your favourite content from our rooms and enjoy of shows, movies and more.",
    "servicios-item-parrafo-atencion":"Our staff will attend you, enjoy your stay.",
    "servicios-item-parrafo-climatizacion":"Feel good setting your room's temperature.",
  },
  "es": {
    "reserva-llegada": "Llegada",
    "reserva-salida": "Salida",
    "reserva-adultos": "Adultos",
    "reserva-ninos": "Niños",
    "reserva-boton": "Comprobar disponibilidad",
    "bienvenida": "Bienvenidos al Hotel Borja",
    "bienvenida-caption": "Tu estancia en nuestro alojamiento está a un click",
    "about": "Acerca de nosotros",
    "contact": "Contáctenos",
    "inicio": "Inicio",
    "elhotel": "El hotel",
    "localidad": "Los alrededores",
    "habitaciones": "Habitaciones",
    "contacto": "Contacto",
    "footer-bio": "Siéntete como en casa en nuestro hotel, envuelto en un entorno acogedor repleto de lugares en los que crear anécdotas y recuerdos.",
    "copyright": "2024 Hotel Borja. Todos los derechos reservados.",
    "footer-hotel-borja": "Hotel Borja",
    "encuentranos": "Encuéntranos",
    "sobre-nosotros": "Sobre nosotros",
    "legal": "Aviso legal",
    "cookies": "Cookies y privacidad",
    "short-hotel-titulo": "Un hotel con historia",
    "short-hotel-parrafo-uno": "Un hotel cómodo, agradable y tranquilo, enclavado en un entorno pacífico como es el caso antiguo de El Puig.",
    "short-hotel-parrafo-dos": "De marcado carácter familiar, en el nuestro hotel nos especializamos en hacer de la estancia una experiencia inmejorable.",
    "short-hotel-button": "Acerca del hotel",
    "short-localidad-titulo": "Entorno acogedor",
    "short-localidad-parrafo-uno": "Calles antiguas, cercanía con el mar y monumentos históricos. la lista para las vacaciones perfectas.",
    "short-localidad-parrafo-dos": "El Puig tiene una gran cantidad de experiencias que ofrecer, además la cercanía con Valencia y el mar hacen de este un lugar ideal para el descanso.",
    "short-localidad-button": "El Puig y alrededores",
    "short-habitaciones-titulo": "Descansa tranquilamente",
    "short-habitaciones-parrafo-uno": "Nuestro hotel-residencia cuenta con una amplia variedad de habitaciones. Seguro que hay una de su agrado.",
    "short-habitaciones-parrafo-dos": "Todas nuestras habitaciones cuentan con servicios dispuestos a su conveniencia.",
    "short-habitaciones-button": "Las habitaciones",
    "faq-titulo-1": "¿Puedo llevar mascotas?",
    "faq-answer-1": "Sí, en Hotel Borja aceptamos mascotas. Consulte con la dirección del hotel antes de venir con sus mascotas y nosotros le atenderemos adecuadamente.",
    "faq-titulo-2": "¿Dispone el hotel de aparcamiento?",
    "faq-answer-2": "En el área cercana del hotel es posible aparcar a pie de calle fácilmente.",
    "seccion-titulo-habitaciones":"Tipos de habitación",
    "seccion-titulo-habitaciones-parrafo":"En hotel Borja disponemos de varios tipos de habitación, de una, de dos y hasta de tres personas. Existe la posibilidad de incluir una cama supletoria.",
    "tipo-habitacion-individual":"Habitación individual",
    "tipo-habitacion-doble":"Habitación doble",
    "tipo-habitacion-triple":"Habitación triple",
    "seccion-titulo-servicios":"Nuestros servicios",
    "servicios-item-titulo-tarjeta":"Pago con tarjetas",
    "servicios-item-titulo-lavanderia":"Lavandería",
    "servicios-item-titulo-wifi":"Wi-fi",
    "servicios-item-titulo-television":"Televisión",
    "servicios-item-titulo-atencion":"Atención cercana",
    "servicios-item-titulo-climatizacion":"Climatización",
    "servicios-item-parrafo-tarjeta":"Puedes dejar tu efectivo en casa, aquí las tarjetas son bienvenidas.",
    "servicios-item-parrafo-lavanderia":"En Hotel Borja disponemos de servicio de lavandería discrecional.",
    "servicios-item-parrafo-wifi":"Navega por la red desde la comodidad de tu habitación y siéntete sin límites.",
    "servicios-item-parrafo-television":"Sintoniza con tu contenido favorito desde una de nuestras habitaciones y disfruta de entretenimiento visual.",
    "servicios-item-parrafo-atencion":"Nuestro personal se encarga de todo, tu disfruta.",
    "servicios-item-parrafo-climatizacion":"Siéntete agusto en nuestras habitaciones adaptando la temperatura de tu habitación.",
  }
};