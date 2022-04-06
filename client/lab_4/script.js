/* eslint-disable */

console.log('LAB 4')

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const images = document.querySelectorAll('img')


let currentImage = 0

images[currentImage].style.display = 'block'


const hideAll = () => {
    images.forEach(x => {
        x.style.display = 'none'
    })
}


const nextImage = () => {
    // advance to the next image
    hideAll()

    if(currentImage < images.length - 1){
        currentImage++
    }else{
        currentImage = 0
    }

    images[currentImage].style.display = 'block'
}

const prevImage = () => {
    // go back
    hideAll()

    if(currentImage >= 1){
        currentImage--
    }else{
        currentImage = images.length - 1
    }

    images[currentImage].style.display = 'block'
}


// listen for clicks on the buttons

prev.addEventListener('click', prevImage)
next.addEventListener('click', nextImage)