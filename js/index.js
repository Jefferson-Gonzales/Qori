/*Menu */
function toggleMenu(){
    document.getElementById("menu").classList.toggle("active");
}

// Cerrar el menú si el usuario hace scroll
window.addEventListener("scroll", function () {
    document.getElementById("menu").classList.remove("active");
});

// Cerrar el menú si el usuario desliza (swipe) en móviles
document.addEventListener("touchstart", function (event) {
    let menu = document.getElementById("menu");
    let toggle = document.querySelector(".menu-toggle");

    // Verifica si el toque inicial no es en el menú ni en el botón de hamburguesa
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.remove("active");
    }
});

//Slide de la galeria
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'previous');
            if (i < index) {
                slide.classList.add('previous');
            }
        });
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Auto-advance slides
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 4000); // Change slide every 5 seconds
    }

    function pauseSlideShow() {
        clearInterval(slideInterval);
    }

    // Event listeners
    prevButton.addEventListener('click', () => {
        pauseSlideShow();
        prevSlide();
        startSlideShow();
    });

    nextButton.addEventListener('click', () => {
        pauseSlideShow();
        nextSlide();
        startSlideShow();
    });

    // Start the slideshow
    startSlideShow();

    // Pause on hover
    const galleryContainer = document.querySelector('.gallery-container');
    galleryContainer.addEventListener('mouseenter', pauseSlideShow);
    galleryContainer.addEventListener('mouseleave', startSlideShow);
});

//Mensajes para Reservar
/*Manicura Clasica*/
function reservarMC() {
    let numero = "51926660418";  // Número de WhatsApp con código de país
    let servicio = "Manicura Clásica";  // Nombre del servicio
    let mensaje = `Hola, quiero reservar una cita para ${servicio}`;  // Mensaje sin encodeURIComponent por ahora
    
    // Codificar el mensaje correctamente para que WhatsApp lo reciba bien
    let mensajeCodificado = encodeURIComponent(mensaje);

    // Intentar abrir WhatsApp con el mensaje preescrito
    let appUrl = `whatsapp://send?phone=${numero}&text=${mensajeCodificado}`;

    // Intentar abrir la aplicación de WhatsApp
    window.location.href = appUrl;

    // Si después de 2 segundos la app no se abrió, redirigir a WhatsApp Web
    setTimeout(() => {
        window.open(`https://wa.me/${numero}?text=${mensajeCodificado}`, "_blank");
    }, 2000);
}

/*Uñas Acrilicas*/
function reservarUA() {
    let numero = "51926660418";  // Número de WhatsApp con código de país
    let servicio = "Uñas Acrilicas";  // Nombre del servicio
    let mensaje = `Hola, quiero reservar una cita para ${servicio}`;  // Mensaje sin encodeURIComponent por ahora
    
    // Codificar el mensaje correctamente para que WhatsApp lo reciba bien
    let mensajeCodificado = encodeURIComponent(mensaje);

    // Intentar abrir WhatsApp con el mensaje preescrito
    let appUrl = `whatsapp://send?phone=${numero}&text=${mensajeCodificado}`;

    // Intentar abrir la aplicación de WhatsApp
    window.location.href = appUrl;

    // Si después de 2 segundos la app no se abrió, redirigir a WhatsApp Web
    setTimeout(() => {
        window.open(`https://wa.me/${numero}?text=${mensajeCodificado}`, "_blank");
    }, 2000);
}

/*Esmaltado en gel*/
function reservarUG() {
    let numero = "51926660418";  // Número de WhatsApp con código de país
    let servicio = "Uñas en Gel";  // Nombre del servicio
    let mensaje = `Hola, quiero reservar una cita para ${servicio}`;  // Mensaje sin encodeURIComponent por ahora
    
    // Codificar el mensaje correctamente para que WhatsApp lo reciba bien
    let mensajeCodificado = encodeURIComponent(mensaje);

    // Intentar abrir WhatsApp con el mensaje preescrito
    let appUrl = `whatsapp://send?phone=${numero}&text=${mensajeCodificado}`;

    // Intentar abrir la aplicación de WhatsApp
    window.location.href = appUrl;

    // Si después de 2 segundos la app no se abrió, redirigir a WhatsApp Web
    setTimeout(() => {
        window.open(`https://wa.me/${numero}?text=${mensajeCodificado}`, "_blank");
    }, 2000);
}

/*Base Rubber*/
function reservarBR() {
    let numero = "51926660418";  // Número de WhatsApp con código de país
    let servicio = "Uñas Base Rubber";  // Nombre del servicio
    let mensaje = `Hola, quiero reservar una cita para ${servicio}`;  // Mensaje sin encodeURIComponent por ahora
    
    // Codificar el mensaje correctamente para que WhatsApp lo reciba bien
    let mensajeCodificado = encodeURIComponent(mensaje);

    // Intentar abrir WhatsApp con el mensaje preescrito
    let appUrl = `whatsapp://send?phone=${numero}&text=${mensajeCodificado}`;

    // Intentar abrir la aplicación de WhatsApp
    window.location.href = appUrl;

    // Si después de 2 segundos la app no se abrió, redirigir a WhatsApp Web
    setTimeout(() => {
        window.open(`https://wa.me/${numero}?text=${mensajeCodificado}`, "_blank");
    }, 2000);
}

/*Uñas Esculpidas*/
function reservarUE() {
    let numero = "51926660418";  // Número de WhatsApp con código de país
    let servicio = "Uñas Esculpidas";  // Nombre del servicio
    let mensaje = `Hola, quiero reservar una cita para ${servicio}`;  // Mensaje sin encodeURIComponent por ahora
    
    // Codificar el mensaje correctamente para que WhatsApp lo reciba bien
    let mensajeCodificado = encodeURIComponent(mensaje);

    // Intentar abrir WhatsApp con el mensaje preescrito
    let appUrl = `whatsapp://send?phone=${numero}&text=${mensajeCodificado}`;

    // Intentar abrir la aplicación de WhatsApp
    window.location.href = appUrl;

    // Si después de 2 segundos la app no se abrió, redirigir a WhatsApp Web
    setTimeout(() => {
        window.open(`https://wa.me/${numero}?text=${mensajeCodificado}`, "_blank");
    }, 2000);
}
/*Pedicura*/
function reservarPD() {
    let numero = "51926660418";  // Número de WhatsApp con código de país
    let servicio = "Pedicura";  // Nombre del servicio
    let mensaje = `Hola, quiero reservar una cita para ${servicio}`;  // Mensaje sin encodeURIComponent por ahora
    
    // Codificar el mensaje correctamente para que WhatsApp lo reciba bien
    let mensajeCodificado = encodeURIComponent(mensaje);

    // Intentar abrir WhatsApp con el mensaje preescrito
    let appUrl = `whatsapp://send?phone=${numero}&text=${mensajeCodificado}`;

    // Intentar abrir la aplicación de WhatsApp
    window.location.href = appUrl;

    // Si después de 2 segundos la app no se abrió, redirigir a WhatsApp Web
    setTimeout(() => {
        window.open(`https://wa.me/${numero}?text=${mensajeCodificado}`, "_blank");
    }, 2000);
}