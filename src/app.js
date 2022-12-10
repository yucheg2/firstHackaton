import './styles.css'
import { ContextMenu } from './menu.js'
import { GameDrumModule } from './modules/drum-game.module'
import { BackgroundModule } from './modules/background.module'

const contextMenu = new ContextMenu('#menu')

let arrayModules = [];

const firstModule = new BackgroundModule('changeBack','Изменить задний фон');
const secondModule = new BackgroundModule('changeColor','Изменить цвет');
const thirdModule = new GameDrumModule('GameDrum', 'Поиграть на барабанах');

arrayModules.push(firstModule)
arrayModules.push(secondModule)
arrayModules.push(thirdModule)


arrayModules.forEach ((item) => {
    contextMenu.add(item)
})


document.addEventListener('click', (event) => {
    const { target } = event;

    if (target.dataset.type == 'changeColor') {
        firstModule.trigger()
        contextMenu.close()
    }

    // if (target.dataset.type == 'GameDrum') {
    //     thirdModule.trigger()
    //     contextMenu.close()
    // }


    switch (target.dataset.type) {
        case 'GameDrum': 
        thirdModule.trigger()
        contextMenu.close()
        break
    }

})


// contextMenu.startMenu()


// const game = new GameDrumModule('game','drum')
// game.trigger()
// game.toHTML()
