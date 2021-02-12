// @ts-check
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');

// Toggle Dark/Light Mode
function toggleImage(mode) {
    document.getElementById('img1').src = `img/undraw_proud_coder_${mode}.svg`;
    document.getElementById('img2').src = `img/undraw_feeling_proud_${mode}.svg`;
    document.getElementById('img3').src = `img/undraw_conceptual_idea_${mode}.svg`;  
  }
function toggleDarkLightMode(mode, oldIcon, newIcon) {
    nav.style.backgroundColor = (mode === 'dark') ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = (mode === 'dark') ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = `${mode[0].toUpperCase() + mode.slice(1)} Mode`;
    toggleIcon.children[1].classList.replace(oldIcon, newIcon);
    toggleImage(mode);
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode('dark', 'fa-sun', 'fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode('light', 'fa-moon', 'fa-sun');
    }

}

// Toggle Switch Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode('dark', 'fa-sun', 'fa-moon');
    }
}