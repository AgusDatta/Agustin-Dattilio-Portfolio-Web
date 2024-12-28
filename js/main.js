document.addEventListener('DOMContentLoaded', () => {
    /* ========== TYPEWRITER ========== */
    const typedTextElem = document.getElementById('typed-text');
    const textToType = "Agustin Dattilio";
    let i = 0;
    const speed = 80;
  
    function typeWriter() {
      if (i < textToType.length) {
        typedTextElem.textContent = textToType.slice(0, i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  
    /* ========== IntersectionObserver (fade-up) ========== */
    const fadeUpElems = document.querySelectorAll('.fade-up-observer');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up-active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    fadeUpElems.forEach(elem => observer.observe(elem));
  
    /* ========== Swiper.js para Habilidades ========== */
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        speed: 1200, // transición suave
        breakpoints: {
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 }
        }
      });
    /* ========== Menú Hamburguesa ========== */
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
  
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  
    // Scroll suave
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        navList.classList.remove('show');
      });
    });
  
  
    /* ========== Theme Slider (Sol/Luna) ========== */
    const themeSlider = document.getElementById('themeSlider');
    const body = document.body;
  
    // Chequear preferencia guardada
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
      themeSlider.classList.add('dark');
    }
  
    themeSlider.addEventListener('click', () => {
      themeSlider.classList.toggle('dark');
      body.classList.toggle('dark-theme');
  
      // Guardar en localStorage
      if (body.classList.contains('dark-theme')) {
        localStorage.setItem('preferredTheme', 'dark');
      } else {
        localStorage.setItem('preferredTheme', 'light');
      }
    });
  });
  

  /* ========== Formulario: preparar mensaje ========== */
  const contactForm = document.getElementById('contactForm');
  const contactMail = document.getElementById('contactMail');
  const contactWhatsApp = document.getElementById('contactWhatsApp');

  contactMail.addEventListener('click', () => {
    // Tomar datos del form
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const motivo = document.getElementById('motivo').value.trim();

    // Componer mailto
    // Ejemplo: ?subject=Consulta de {nombre} {apellido}&body=Hola, mi motivo es...
    const subject = encodeURIComponent(`Consulta de ${nombre} ${apellido}`);
    const body = encodeURIComponent(`Hola, mi motivo es:\n${motivo}`);
    const mailtoLink = `mailto:agustindatilio@gmail.com?subject=${subject}&body=${body}`;

    window.open(mailtoLink, "_blank");
  });

  contactWhatsApp.addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const motivo = document.getElementById('motivo').value.trim();

    // Componer link de WhatsApp
    // Ejemplo: &text=Hola soy {nombre} {apellido}, mi motivo es: {motivo}
    const text = encodeURIComponent(`Hola, soy ${nombre} ${apellido}.\nTe escribo por el siguiente motivo: ${motivo}`);
    const waLink = `https://wa.me/5491126320824?text=${text}`;
    
    window.open(waLink, "_blank");
  });