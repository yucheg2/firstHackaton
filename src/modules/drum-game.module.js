import {Module} from '../core/module'
import {Round} from './drum-game-round.modules'

export class GameDrumModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.numOfLvl = 3
    }


    trigger() {
        // alert('Hello')
        let agree = confirm('Поиграем?')
        if (agree === true) {
            alert('Отлично! Тебе нужно будет сыграть на бариках. Повторяй биты!')

            class Round1 extends Round {
                constructor(level,task) {
                    super(level, task)
                }
            }
            const round1 = new Round1('Уровень первый','hi-hat+kick - hi-hat+snare - hi-hat+kick - hi-hat+snare')
            round1.createDrumFiled()
            round1.game()

            console.log(round1);

        }
        // throw new Error(`Trigger method should be implemented in module "${this.type}"`)
      }
    
    toHTML() {
      return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
      
}

