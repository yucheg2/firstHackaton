import { setTimeout } from "core-js";
import { Game } from "./game-description";
import { random } from "../utils"
import { closeGameContainer } from "../utils";
import { Module } from "../core/module"

export class ReactionGame extends Module{
    #game
    constructor(type,text) {
        super(type,text)
        this.#game = new Game('Твоя задача - как можно быстрее щёлкнуть по экрану, как только увидишь зелёный цвет!')
    }

    gameLogic() {

        const game = document.querySelector('.game-r')
        let startResult = 0
        const secondToWait = random(1,10)
        const greenScrean = document.createElement('div')
        greenScrean.classList = 'green'
        greenScrean.style.background = '#88ff86'
        greenScrean.style.display = 'none'

        greenScrean.addEventListener('click',(event) => {
            const finResult = Date.now() - startResult
            greenScrean.style.display = 'none'
            const reactionResult = document.createElement('div')
            reactionResult.className = 'reaction-result'
            reactionResult.innerHTML = `<h1 class = 'reaction-result-text'>Ваш результат: ${finResult}ms.</h1><button class = "result-button">Закрыть игру</button>`
            game.append(reactionResult)
            localStorage.setItem('reactionResult',`${finResult}`)
                
            const button =reactionResult.querySelector('button')
            button.style.position = 'absolute'
            button.style.right = '20px'
            button.style.top = '20px'

            button.addEventListener('click',() => {
                closeGameContainer()
                setTimeout(()=>{
                reactionResult.style.display = 'none'
                game.remove()
            },800)
            })
        })

        game.append(greenScrean)


        setTimeout(() => {
            greenScrean.style.display = 'inline' 
            startResult = Date.now()
        }, secondToWait*1000)
    }

    trigger() {
        this.#game.run(this.gameLogic)
    }
}