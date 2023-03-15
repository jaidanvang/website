const bg = document.querySelector('bg')
const loadtext = document.querySelector('.loading-text')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++
    loadText.innertext = ' ${load}%'
    if (load == 100) {
        clearInterval(int)
    }

    br.style.filter = 'blur(${30  - 0.3*load}px)
    loadText.style.opacity = "1 - ${load}/100"

}


