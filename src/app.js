import './styles.css'
import { ContextMenu } from './menu.js'
import { ReactionGame } from './modules/reaction-game'
import { GameDrumModule } from './modules/drum-game.module'
import { BackgroundModule } from './modules/background.module'
import { ShapeModule } from './modules/shape.module'
import { GuessNumberModule } from './modules/guess-the-number'
import { stopPreviousGame } from './utils'
import { TableResult } from './modules/table-result.module'
import { Welcome } from './mainpage/welcome'

const welcome = new Welcome()
const contextMenu = new ContextMenu('#menu')

let arrayModules = []

const changeColorModule = new BackgroundModule('changeColor','Изменить цвет')
const drumModule = new GameDrumModule('GameDrum', 'Поиграть на барабанах')
const reactionModule = new ReactionGame ('reactionGame', 'Игра на реакцию')
const randomShapeModule = new ShapeModule ('Shape',  'Случайная фигура')
const guessNumberModule = new GuessNumberModule('Guess', 'Игра: Угадай число' )
const tableResultModule = new TableResult ('tableResult', 'Посмотреть лучшие результаты')

welcome.showInput()

arrayModules.push(changeColorModule, reactionModule, randomShapeModule, guessNumberModule, drumModule, tableResultModule)

arrayModules.forEach (item => contextMenu.add(item))

document.addEventListener('click', (event) => {
    const { target } = event;

    switch (target.dataset.type) {
        case 'changeColor':
            changeColorModule.trigger()
            contextMenu.close()
        break;

        case 'reactionGame':
            stopPreviousGame()
            reactionModule.trigger()
            contextMenu.close()
        break;

        case 'GameDrum': 
            stopPreviousGame()
            drumModule.trigger()
            contextMenu.close()
        break;

        case 'Shape': 
            stopPreviousGame()
            randomShapeModule.trigger()
            contextMenu.close()
        break;

        case 'Guess':
            stopPreviousGame()
            guessNumberModule.trigger()
            contextMenu.close()
        break;

        case 'tableResult':
            stopPreviousGame()
            tableResultModule.trigger()
            contextMenu.close()
        break;
}})