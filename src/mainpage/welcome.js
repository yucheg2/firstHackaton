export class Welcome {
    constructor() {
        this.name = localStorage.getItem('name')
    }

    showInput () {
        const header = document.createElement('div')
        header.className = 'header'
        const text = document.createElement('h1')
        text.innerText = ''
    }
}