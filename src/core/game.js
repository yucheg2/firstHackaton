import { async } from "regenerator-runtime"

export class Game {
    #dedescription
    #result
    constructor(description) {
        this.#dedescription = description//описание игры
        this.#result = 0 // по умолчанию результат игры равен 0
    }

    #description() {
        const closeDescription = document.createElement('div')
        closeDescription.className = 'description-close'
        const closeText = document.createElement('span')
        closeText.className ='description-close-text'
        closeText.innerText = 'Чтобы начать игру кликните по окну.'
        closeDescription.append(closeText)

        const description = document.createElement('div')
        description.className = 'description'
        const descriptionText = document.createElement('h1')
        descriptionText.className = 'description-text'
        descriptionText.innerText = this.#dedescription

        description.append(descriptionText,closeDescription)

        return description
    }

    #gameBegin () {
        const game = document.createElement('div')
        game.className = 'game'

        return game
    }

    gameLogic () {
        //логика твоей игры
    }

    run() {
        const gameContainer = document.createElement('div')
        gameContainer.className = 'game-container'
        const gameWindow = document.createElement('div')
        gameWindow.className = 'game-window'

        const description = this.#description()
        const overlay = document.createElement('div')
        overlay.className = 'overlay'

        gameWindow.append(description)
        gameContainer.append (gameWindow,overlay)

        description.addEventListener('click', async (event) => {
            const game = this.#gameBegin()
            gameWindow.append(game)
            description.style.display = 'none'
            this.gameLogic()
        })

        const isExist = document.querySelector('.game-container')
        if (!isExist) {
            document.body.append( gameContainer)
        } else {
            isExist.style.opacity = "1"
            const description = isExist.querySelector('.description')
            description.style.display = "inline"
        }
    }
}