const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const clickCookie = document.querySelector('#clickCookie')
const btnReset = document.querySelector('#btnReset')
const messageSpace = document.querySelector('.screen2 p')
const messages = [
    "A vida trará coisas boas se tiver paciência.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não há que ser forte. Há que ser flexível.",
    "O bom-senso vale mais do que muito conhecimento.",
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
    "Sem o fogo do entusiasmo, não há o calor da vitória.",
    "A vontade das pessoas é a melhor das leis.",
    "A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!",
    "Você sempre será a sua melhor companhia!",
]


clickCookie.addEventListener('click', openCookie)
btnReset.addEventListener('click', toggleScreen)
document.addEventListener('keydown', pressEnter)

function openCookie() {
    toggleScreen()
    let random = Math.round(Math.random() * 10)
    messageSpace.innerText = messages[random]
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnter(event) {
    if(event.key == 'Enter') {
        toggleScreen()
    }
}