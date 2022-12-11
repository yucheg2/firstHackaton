import { random } from '../utils'
import { randomColor } from '../utils'
import { Module } from '../core/module'

export class ShapeModule extends Module {
    constructor (type,text) {
        super (type, text)
    }
    
    trigger () { 
        const elem = document.querySelector('.random-figure') 
        if (elem !== null) {
            elem.remove()
        } 

        function createRandomElement(obj) {
            const game = document.createElement('div')
            game.classList.add('game')
            game.style.width = '100%'
            game.style.height = '100%'
            game.style.position = 'relative'
            document.body.append(game)

            const figure = document.createElement('div')
            figure.classList.add('random-figure')
            figure.style.width = obj.width
            figure.style.height = obj.height
            figure.style.backgroundColor = obj.color

            if (obj.hasOwnProperty('isRadius')) {
                figure.style.borderRadius = '50%'
            }

            figure.style.position = 'absolute'
            figure.style.left = random(1, document.documentElement.clientWidth - parseInt(obj.width)) + 'px'
            figure.style.top = random(1, document.documentElement.clientHeight - parseInt(obj.height)) + 'px'             
            
            game.append(figure)
        }

        const figureNumber = random(1, 3)
     
        switch(figureNumber) {
            case 1: 
                const rectangle = {
                    width: random(1, 200) + 'px',
                    height: random(1, 200) + 'px',
                    color: randomColor()
                }         
                createRandomElement(rectangle)    
            break
            case 2: 
                const squareWidth = random(1, 200) + 'px'
                const square = {
                    width: squareWidth,
                    height: squareWidth,
                    color: randomColor()
                }         
                createRandomElement(square)                   
            break
            case 3: 
                const circleWidth = random(10, 100) + 'px'
                const circle = {
                    width: circleWidth,
                    height: circleWidth,
                    color: randomColor(),
                    isRadius: true
                }         
                createRandomElement(circle)                   
            break
        }

    }
        
}