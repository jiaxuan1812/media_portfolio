const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery_container img');
const original = document.querySelector('.image_viewer');

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');
        // dynamic change image
        const originalSrc = preview.getAttribute('data-original');
        original.src=`photos/${originalSrc}`
    })
})

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }
});