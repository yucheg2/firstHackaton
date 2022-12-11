import { random } from '../utils'
import { randomColor } from '../utils'
import { Module } from '../core/module'

export class ShapeModule extends Module {
    constructor (type,text) {
        super (type, text)
    }
    
    trigger () { 
     //ищем эоемент на странице - если есть - удаляем        
        const elem = document.querySelector('.random-figure') 
        if (elem !== null) {
            elem.remove()
        } 

        //отрисовка фигуры
        function createRandomElement(obj) {
            const figure = document.createElement('div')
            figure.classList.add('random-figure')
            figure.style.width = obj.width
            figure.style.height = obj.height
            figure.style.backgroundColor = obj.color

            if (obj.hasOwnProperty('isRadius')) {
                figure.style.borderRadius = '50%'
            }

            figure.style.position = 'absolute'
            figure.style.left = random(1, window.screen.width - parseInt(obj.width)) + 'px'
            figure.style.top = random(1, document.body.clientHeight - parseInt(obj.height)) + 'px'             
            document.body.style.position = 'relative'
            document.body.append(figure)
        }
        // выбираем случайную фигуру
        const figureNumber = random(1, 3)
     
        switch(figureNumber) {
            case 1: 
                //прямоугольник
                const rectangle = {
                    width: random(1, 200) + 'px',
                    height: random(1, 200) + 'px',
                    color: randomColor()
                }         
                createRandomElement(rectangle)    
            break
            case 2: 
                //квадрат
                const squareWidth = random(1, 200) + 'px'
                const square = {
                    width: squareWidth,
                    height: squareWidth,
                    color: randomColor()
                }         
                createRandomElement(square)                   
            break
            case 3: 
                //круг
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