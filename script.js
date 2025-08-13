"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById('splash');
  const enterSite = document.getElementById('enter-site');
  const mainContent = document.getElementById('main-content');
  const navbar = document.querySelector('nav');
  const body = document.body;

  const themeSplash = document.getElementById('theme-toggle-splash');
  const themeNav = document.getElementById('theme-toggle-nav');

  // Enter site button
  enterSite.addEventListener('click', () => {
    splash.style.transition = "opacity 0.5s ease";
    splash.style.opacity = 0;
    setTimeout(() => {
      splash.style.display = 'none';
      mainContent.classList.remove('d-none');
      navbar.classList.remove('d-none');
    }, 500);
  });

  // Theme toggle function (affects body and splash)
  const toggleTheme = () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    splash.classList.toggle('dark-theme');
    splash.classList.toggle('light-theme');
  }

  themeSplash.addEventListener('click', toggleTheme);
  themeNav.addEventListener('click', toggleTheme);
});