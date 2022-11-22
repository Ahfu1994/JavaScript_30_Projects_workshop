const container = document.getElementById('container');
const imgs = document.querySelectorAll('#container img');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

// console.log(imgs)
let idx = 0;

let interval = setInterval(slide, 2000); // call fucntion slide every 2 sec 

function slide() {
    // console.log('image slide')
    idx++;
    changeImage();
}

function changeImage() {
    //0=>500=>1000=>1500
    //0=>1*500=>2*500=>3*500

    if (idx > imgs.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = imgs.length - 1;
    }

    container.style.transform = `translateX(${-idx*500}px)`;
}

left.addEventListener('click', () => {
    idx--;
    // console.log(idx);
    changeImage();
    resetInterval();
});

right.addEventListener('click', () => {
    idx++;
    changeImage();
    resetInterval();
});

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(slide, 2000);
}