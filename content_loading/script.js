const header = document.getElementById('header');
const title = document.getElementById('title');
const description = document.getElementById('description');
const profile_img = document.getElementById('profile_img');
const seller_name = document.getElementById('name');
const price = document.getElementById('price');

const animated_bg = document.querySelectorAll('.animated_bg');
const animated_text = document.querySelectorAll('.animated_text');

setTimeout(showContent, 2000); // wait 2 sec before call fucntion showContent
function showContent() {
    header.innerHTML = `
    <img src="https://images.pexels.com/photos/45243/saxophone-music-gold-gloss-45243.jpeg?auto=compress&cs=tinysrgb&w=300" alt="">
    `;

    title.innerHTML = `Gold Saxophone`;

    description.innerHTML = `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, sed!
    `;
    profile_img.innerHTML = `
    <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="">
    `;

    seller_name.innerHTML = `Krin Patterson`;
    price.innerHTML = `price $20,000`;


    animated_bg.forEach(el => el.classList.remove('animated_bg'));
    animated_text.forEach(el => el.classList.remove('animated_text'));
}