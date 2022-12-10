import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            this.open(event.clientY, event.clientX)
        })
    }
    open (top, left) {
        this.el.style.top = `${top}px`
        this.el.style.left = `${left}px`
        this.el.classList.add('open')
    }

    add (m) {
        this.el.insertAdjacentHTML('beforeend', m.toHTML())
    }

    close () {
        this.el.classList.remove('open')
    }
}