'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonYes = document.getElementById('heroButtonYes');
  const heroButtonNo = document.getElementById('heroButtonNo');

  const noSomosNovios = () => {
    alert(' 💔 No somos Novios 💔');
    alert(' 💔 Te tenia una sorpresa 💔');
    alert('😔');
    location.href = 'https://youtu.be/2Vv-BfVoq4g?t=20';
  };

  const opcionNo = () => {
    // heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = Math.random() * window.innerHeight + 'px';
    heroButtonNo.style.bottom = Math.random() * window.innerWidth + 'px';
  };

  const nombre = prompt('🥰 Dime tu Nombre 🥰');
  heroTitle.innerHTML += (nombre ?? 'Amor' ) + '🥰?';

  heroButtonNo.addEventListener('click', noSomosNovios);
  heroButtonNo.addEventListener('mouseover', opcionNo);
};

document.addEventListener('DOMContentLoaded', documentReady);