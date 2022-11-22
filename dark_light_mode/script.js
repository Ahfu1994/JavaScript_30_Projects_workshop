const switchToggle = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

function switchMode(e) {

    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
        imageSwitchMode(dark)
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
        imageSwitchMode(light)
    }
}

function darkMode() {
    toggleIcon.children[0].textContent = "dark mode";
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    // background: rgb(255 255 255/50%);
    nav.style.backgroundColor = 'rgb(0 0 0/50%)';
    // image1.src = "img/undraw_Projections_dark.svg";
    // image2.src = "img/undraw_Raining_dark.svg";
    // image3.src = "img/undraw_Freelancer_dark.svg";
}

function lightMode() {
    toggleIcon.children[0].textContent = "light mode";
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    nav.style.backgroundColor = 'rgb(255 255 255/50%)';
    // image1.src = "img/undraw_Projections_light.svg";
    // image2.src = "img/undraw_Raining_dark.light";
    // image3.src = "img/undraw_Freelancer_light.svg";
}

function imageSwitchMode(mode) {
    image1.src = `img/undraw_Projections_${mode}.svg`;
    image2.src = `img/undraw_Raining_${mode}.svg`;
    image3.src = `img/undraw_Freelancer_${mode}.svg`;
}

switchToggle.addEventListener('change', switchMode);