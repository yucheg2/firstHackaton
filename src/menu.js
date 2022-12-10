import {Menu} from './core/menu'

function adElementToMenu(name, menu, id) {
    const liItem = document.createElement('li')
    liItem.className = 'menu-item'
    liItem.setAttribute('data-id', id)
    liItem.textContent = name
    menu.append(liItem)
}

export class ContextMenu extends Menu {
    startMenu() {
        const menu = document.querySelector('#menu')
        adElementToMenu('первая игра', menu, 1)
        
        menu.append('')
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            menu.style.top = `${event.clientY}px`
            menu.style.left = `${event.clientX}px`
            menu.classList.add('open')
        })
        document.addEventListener('click', (event) => {
            if (event.button !== 2) {
                menu.classList.remove('open')
            }
        }, false)        
        menu.addEventListener('click', (event) => {         
            const {target} = event
            event.stopPropagation()
            if (target.getAttribute('data-id') == 1) {
                console.log(target.getAttribute('data-id'))
                console.log('запуск первой игры')
                //reaction.run()
            }
        }, false)        
    }
}