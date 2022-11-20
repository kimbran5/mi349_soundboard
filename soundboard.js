//Array of sound effects
const sounds = ['Applause', 'Snore', 'Wow!', 'Boo']
//Loops through and creates a button for each sound
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound
//On click plays sound
    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').
    appendChild(btn)
})