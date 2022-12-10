import './styles.css'
import { ContextMenu } from './menu.js'
import { ReactionGame } from './modules/reaction-game'
import { GameDrumModule } from './modules/drum-game.module'
import { BackgroundModule } from './modules/background.module'

const contextMenu = new ContextMenu('#menu')

let arrayModules = [];

// const firstModule = new BackgroundModule('changeColor','Изменить цвет');



const secondModule = new BackgroundModule('changeColor','Изменить цвет');
const thirdModule = new GameDrumModule('GameDrum', 'Поиграть на барабанах');
const reactionModule = new ReactionGame ('reactionGame', 'Игра на реакцию')
arrayModules.push(secondModule)
arrayModules.push(reactionModule)
arrayModules.push(thirdModule)


arrayModules.forEach ((item) => {
    contextMenu.add(item)
})


document.addEventListener('click', (event) => {
    const { target } = event;

    switch (target.dataset.type) {
        case 'changeColor':
        secondModule.trigger()
        contextMenu.close(); break;
        case 'reactionGame':
        reactionModule.trigger()
        contextMenu.close();break;
        case 'GameDrum': 
        thirdModule.trigger()
        contextMenu.close()
        break
}})
        // contextMenu.close()
    // }

    // switch (target.dataset.type) {
    //     case 'GameDrum': 
    //     thirdModule.trigger()
    //     contextMenu.close()
    //     break
    // }

     // if (target.dataset.type == 'GameDrum') {
    //     thirdModule.trigger()
    //     contextMenu.close()
    // }

// })


// contextMenu.startMenu()


// const game = new GameDrumModule('game','drum')
// game.trigger()
// game.toHTML()
