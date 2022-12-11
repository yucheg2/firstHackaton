import {Module} from '../core/module'
import '../../styles/guess-number-game.css'

export class GuessNumberModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

trigger() {


        function makeHTML() {
        const main = document.createElement('div')
        main.className = 'game'
        const h1 = document.createElement('h1')
        h1.className = 'guess'
        h1.textContent = 'ИГРА: [Угадай число от 0 до 100]'
        const output = document.createElement('ul')
        output.className = 'output'
        const prom = document.createElement('form')
        prom.className = 'prompt'
        const input = document.createElement('input')
        
        prom.append(input)
        
        main.append(h1, output, prom)
        
        document.body.append(main)
        
        
        }
        
        makeHTML()
        let name = localStorage.getItem('name')
        let number = Math.floor(Math.random() * 100)
        let attempts = 0
        
        const output = document.querySelector('.output')
        const prom = document.querySelector('.prompt')
        const input = document.querySelector('input')
        
        input.focus()
        
        // outputMessage('Введите имя игрока:')
        
        prom.addEventListener('submit', handleSubmit)

        outputMessage(`${name}, тебе необходимо отгадать случайное число от 0 до 100 за наименьшее кол-во попыток. После каждой попытки появится сообщение 'мало', 'много' или 'верно'.` )
        
        function handleSubmit(event) {
        
            event.preventDefault()
            processInput(input.value)
            input.value = '' 
        }
        
        function outputMessage(message) {
        
            const li = document.createElement('li')
            li.textContent = message
            output.appendChild(li)
        
        }
        
        
        function processInput(input) {
            if (!input) return
              

        
            let attempt = Number.parseInt(input)
            if (Number.isNaN(attempt)) return

            outputMessage(input)


            attempts += 1


            if (attempt > number) {
                outputMessage('Много. Попробуй еще!')
            } else if (attempt < number) {
                outputMessage('Мало. Поробуй еще')
            } else {
        
                outputMessage(`Верно! Это число ${number}.`)
                outputMessage(`Кол-во попыток: ${attempts}`)
        
                prom.remove()
        
            }
        
            localStorage.setItem('attempts', attempts)
        
        }
        }

    
















}