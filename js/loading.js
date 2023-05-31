const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 0



function blurring(){
    load++
    loadText.innerText = ${load}%
    if (load == 100) {
        clearInterval(int)
    }




    bg.style.filter = 'blur($(px)
    loadTect.style.opacity = "0.5"

}