const categories = document.querySelectorAll('.category');

window.addEventListener('scroll', showCategory);

function showCategory() {
    const calculateHeight = window.innerHeight - 150;
    // console.log(calculateHeight);

    categories.forEach((category) => {
        const topPosition = category.getBoundingClientRect().top;
        if (topPosition < calculateHeight) {
            // console.log('slide in');
            category.classList.add('active');
        } else {
            // console.log('slide out');
            category.classList.remove('active');

        }
    });
}