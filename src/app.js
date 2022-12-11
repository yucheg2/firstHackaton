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

let arrayModules = [];

const secondModule = new BackgroundModule('changeColor','Изменить цвет');
const drumModule = new GameDrumModule('GameDrum', 'Поиграть на барабанах');
const reactionModule = new ReactionGame ('reactionGame', 'Игра на реакцию')
const fourdModule = new ShapeModule ('Shape',  'Случайная фигура')
const guessNumber = new GuessNumberModule('Guess', 'Игра: Угадай число' )
const tableResult = new TableResult ('tableResult', 'Посмотреть результаты')

welcome.showInput()

arrayModules.push(secondModule, reactionModule, fourdModule, guessNumber, DrumModule)

arrayModules.forEach (item => contextMenu.add(item))

document.addEventListener('click', (event) => {
    const { target } = event;

    switch (target.dataset.type) {
        case 'changeColor':
            secondModule.trigger()
            contextMenu.close()
        break

        case 'reactionGame':
            stopPreviousGame()
            reactionModule.trigger()
            contextMenu.close()
        break;

        case 'GameDrum': 
            stopPreviousGame()
            drumModule.trigger()
            contextMenu.close()
        break

        case 'Shape': 
            stopPreviousGame()
            fourdModule.trigger()
            contextMenu.close()
        break

        case 'Guess':
            stopPreviousGame()
            guessNumber.trigger()
            contextMenu.close()
        break;

        case 'tableResult':
            stopPreviousGame()
            tableResult.trigger()
            contextMenu.close()
        break;
}})