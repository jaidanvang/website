const jokeE1 = document.getElementById('joke')
const jokebtn = document.getElementById('jokeBtn')

async jokeBtn.addEventListener('click', generateJoke)

ascyn function generateJoke(){
    const res = await fetch('https://icanhazdadjoke.com', {
        headers: {Accept: 'application/json',},
    })

    const = data = await res.json()
    jokeEl.innerHTML = data.joke
}