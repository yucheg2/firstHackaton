
export class Game {
    #dedescription
    #result
    constructor(description) {
        this.#dedescription = description//описание игры
        this.#result = 0 // по умолчанию результат игры равен 0
    }

    #description() {
        const closeDescription = document.createElement('div')
        closeDescription.className = 'description-r-close'
        const closeText = document.createElement('span')
        closeText.className ='description-r-close-text'
        closeText.innerText = 'Чтобы начать игру кликните по окну.'
        closeDescription.append(closeText)

        const description = document.createElement('div')
        description.className = 'description-r'
        const descriptionText = document.createElement('h1')
        descriptionText.className = 'description-r-text'
        descriptionText.innerText = this.#dedescription

        description.append(descriptionText,closeDescription)

        return description
    }

    #gameBegin () {
        const game = document.createElement('div')
        game.className = 'game-r'

        return game
    }

    run(gameLogic) {
        const gameExist = document.querySelector('.game-r')
        const isExist = document.querySelector('.game-r-container')

        const gameContainer = document.createElement('div')
        gameContainer.className = 'game-r-container'
        const gameWindow = document.createElement('div')
        gameWindow.className = 'game-r-window'

        const description = this.#description()
        const overlay = document.createElement('div')
        overlay.className = 'overlay'

        gameWindow.append(description)
        gameContainer.append (gameWindow,overlay)

        description.addEventListener('click', async (event) => {

            if(!gameExist) { 
                const game = this.#gameBegin()           
                gameWindow.append(game)
            } else {
                gameExist.style.display = 'inline'
            }
            description.style.display = 'none'
            gameLogic()
        })

        if (!isExist) {
            document.body.append( gameContainer)
        } else {
            isExist.style.opacity = "1"
            const description = isExist.querySelector('.description-r')
            description.style.display = "inline"
        }
        if (gameExist) {
            gameExist.style.display = 'none'
        }
    }
}