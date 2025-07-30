// script.js - Funcionalidades para o site Citadela Doces

document.addEventListener("DOMContentLoaded", function () {
  // 1. Scroll suave para os links de navegação
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    });
  });

  // 2. Efeito de zoom nas imagens dos produtos
  const productImages = document.querySelectorAll('.card img');

  productImages.forEach(img => {
    img.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });

  // 3. Efeito no header ao rolar a página
  const header = document.querySelector('header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(179, 111, 121, 0.95)';
      header.style.padding = '10px 20px';
    } else {
      header.style.backgroundColor = '#b36f79';
      header.style.padding = '20px';
    }
  });

  // 4. Confirmação ao abrir o WhatsApp
  const whatsappBtn = document.querySelector('.whatsapp-btn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function (e) {
      setTimeout(() => {
        alert('Estamos ansiosos para atender você! Responderemos em breve 😊');
      }, 1000); // Pequena espera para simular abertura
    });
  }

  // 5. Animação sutil nas seções ao aparecer na tela (Intersection Observer)
  const sections = document.querySelectorAll('section');

  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    revealOnScroll.observe(section);
  });
});