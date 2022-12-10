import {Menu} from './core/menu'

// function adElementToMenu(name, menu, id) {
//     const liItem = document.createElement('li')
//     liItem.className = 'menu-item'
//     liItem.setAttribute('data-id', id)
//     liItem.textContent = name
//     menu.append(liItem)
// }

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            // console.log(event.clientY, event.clientX);
            this.open(event.clientY, event.clientX)
        })
    }
    open (top, left) {
        this.el.style.top = `${top}px`
        this.el.style.left = `${left}px`
        this.el.classList.add('open')
    }

    add (m) {
        console.log(m);
        this.el.insertAdjacentHTML('beforeend', m.toHTML())
    }

    close () {
        this.el.classList.remove('open')
    }
}