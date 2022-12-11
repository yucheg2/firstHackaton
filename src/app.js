import './styles.css'
import { ContextMenu } from './menu.js'
import { ReactionGame } from './modules/reaction-game'
import { GameDrumModule } from './modules/drum-game.module'
import { BackgroundModule } from './modules/background.module'

const contextMenu = new ContextMenu('#menu')

let arrayModules = [];

const secondModule = new BackgroundModule('changeColor','Изменить цвет');
const DrumModule = new GameDrumModule('GameDrum', 'Поиграть на барабанах');
const reactionModule = new ReactionGame ('reactionGame', 'Игра на реакцию')
arrayModules.push(secondModule)
arrayModules.push(reactionModule)
arrayModules.push(DrumModule)


arrayModules.forEach (item => contextMenu.add(item))


document.addEventListener('click', (event) => {
    const { target } = event;

    switch (target.dataset.type) {
        case 'changeColor':
        secondModule.trigger()
        contextMenu.close(); break;

        case 'reactionGame':
        DrumModule.stopPreviousGame()
        reactionModule.trigger()
        contextMenu.close();
        break;

        case 'GameDrum': 
        DrumModule.stopPreviousGame()
        DrumModule.trigger()
        contextMenu.close()
        break
}})
