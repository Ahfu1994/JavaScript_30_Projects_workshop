const count = 10;
const apiKey = 'Beuwz29my6bbZzxoiQsf5ljINSp-EHihWZFCl9RJxYM';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

const imageContainer = document.getElementById('img-container');
let photoArrays = [];
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);

        photoArrays = await response.json();

        disPlayImage();

    } catch (error) {
        console.log(error);
    }
}

function disPlayImage() {
    photoArrays.forEach((photo) => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');

        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('title', photo.alt_description);
        img.setAttribute('alt', photo.alt_description);

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        //get photos to show on screen
        getPhotos();
    }
});
getPhotos();