import {Module} from '../core/module'
import {Round} from './drum-game-round.modules'

export class GameDrumModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.numOfLvl = 3
    }


    trigger() {
        let agree = confirm('Поиграем? Тебе нужно будет сыграть один бит!')
        if (agree === true) {
            
            class Round1 extends Round {
                constructor(level,task) {
                    super(level, task)
                }
            }
            const round1 = new Round1('Уровень первый','Том 1 - Kick - Том 1 - Snare - Kick - HiHat - Snare - HiHat - Kick')

            round1.createDrumFiled()
            round1.game()
        }
      }
    
    toHTML() {
      return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
      
}

