const progress = document.getElementById('progress')
const prev = document.getElementbyId('prev')
const next = document.getElementById('next')
const circles = document.querysSelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > 4) {
        currentActive = 4
    }
    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentactive = 1
    }

    update()
})

function update(){
    progress.style.width = 20+'%'

}