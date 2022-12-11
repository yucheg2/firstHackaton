import './styles.css'
import { ContextMenu } from './menu.js'
import { ReactionGame } from './modules/reaction-game'
import { GameDrumModule } from './modules/drum-game.module'
import { BackgroundModule } from './modules/background.module'
import { ShapeModule } from './modules/shape.module'

const contextMenu = new ContextMenu('#menu')

let arrayModules = [];

const secondModule = new BackgroundModule('changeColor','Изменить цвет')
const thirdModule = new GameDrumModule('GameDrum', 'Поиграть на барабанах')
const reactionModule = new ReactionGame ('reactionGame', 'Игра на реакцию')
const fourdModule = new ShapeModule ('Shape',  'Случайная фигура')

arrayModules.push(secondModule)
arrayModules.push(reactionModule)
arrayModules.push(thirdModule)
arrayModules.push(fourdModule)

arrayModules.forEach ((item) => {
    contextMenu.add(item)
})


document.addEventListener('click', (event) => {
    const { target } = event;

    switch (target.dataset.type) {
        case 'changeColor':
            secondModule.trigger()
            contextMenu.close()
        break
        case 'reactionGame':
            reactionModule.trigger()
            contextMenu.close()
        break
        case 'GameDrum': 
            thirdModule.trigger()
            contextMenu.close()
        break
        case 'Shape': 
            fourdModule.trigger()
            contextMenu.close()
        break
}})
