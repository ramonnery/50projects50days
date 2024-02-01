const images = document.querySelectorAll('.images')
const texts = document.querySelectorAll('p')

closeImage = () => images.forEach(img => img.classList.remove('image-opened'))
removeOpacity = () => texts.forEach(p => p.classList.remove('text-activated'))

images.forEach(img => {
    img.addEventListener('click', e => {
        if (!img.classList.contains('image-opened')) {
            closeImage()
            removeOpacity()
            img.classList.add('image-opened')
            img.querySelector('p').classList.add('text-activated')
        }
    })          
})


