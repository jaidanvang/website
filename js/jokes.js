const jokeE1 = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

async jokeBtn.addEventListener('click', generateJoke)

ascyn function generateJoke(){
    const res = await fetch('https://icanhazdadjoke.com', {
        headers: {Accept: 'application/json',},
    })

    const = data = await res.json()
    jokeE1.innerHTML = data.joke
}