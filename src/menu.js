import {Menu} from './core/menu'
import { Welcome } from './mainpage/welcome'

const welcome = new Welcome()

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            this.open(event.clientY, event.clientX)
        })
    }
    open (top, left) {
        if (localStorage.getItem('name')) {
        this.el.style.top = `${top}px`
        this.el.style.left = `${left}px`
        this.el.classList.add('open')
        welcome.close()
        }
    }

    add (m) {
        this.el.insertAdjacentHTML('beforeend', m.toHTML())
    }

    close () {
        this.el.classList.remove('open')
    }
}