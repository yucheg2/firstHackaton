import './styles.css'
import { ContextMenu } from './menu.js'
import { ReactionGame } from './modules/reaction-game'
// import { GameDrumModule } from './modules/drum-game.module'
import { BackgroundModule } from './modules/background.module'

const contextMenu = new ContextMenu('#menu')

let arrayModules = [];

const firstModule = new BackgroundModule('changeColor','Изменить цвет');
const reactionModule = new ReactionGame ('reactionGame', 'Игра на реакцию')

arrayModules.push(firstModule)
arrayModules.push(reactionModule)

arrayModules.forEach ((item) => {
    contextMenu.add(item)
})


document.addEventListener('click', (event) => {
    const { target } = event;

    switch (target.dataset.type) {
        case 'changeColor':
        firstModule.trigger()
        contextMenu.close(); break;
        case 'reactionGame':
        reactionModule.trigger()
        contextMenu.close();break;
}})


// contextMenu.startMenu()


// const game = new GameDrumModule('game','drum')
// game.trigger()
// game.toHTML()
