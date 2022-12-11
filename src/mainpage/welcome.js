import '../../styles/main-page.css'

export class Welcome {
    constructor() {
        this.name = localStorage.getItem('name')
    }

    showInput () {
          
        const header = document.createElement('div')
        header.className = 'header'
        const inputContainer = document.createElement('div')
        inputContainer.className = 'name-input'
        const text = document.createElement('h1')
        text.innerText = 'Введите имя:'
        text.style.color = 'white'
        const form = document.createElement ('form')
        form.className = 'name-form'
        const input = document.createElement('input')
        input.className = 'name-input'

        form.append(input)
        inputContainer.append(text,form)
        header.append(inputContainer)

        if (!localStorage.getItem('name')){
            document.body.append(header)
            form.addEventListener('submit',(event) => {
                event.preventDefault()
                const { target } = event
                localStorage.setItem('name',input.value)
                inputContainer.innerHTML = `<h1 class= "s"style="color: white;">Привет, ${localStorage.getItem('name')}!<br>Если хочешь поиграть - нажми правой кнопкой мыши по экрану. </h1>`
            })
        } else {
            document.body.append(header)
            inputContainer.innerHTML = `<h1 style="color: white;">Привет, ${localStorage.getItem('name')}!<br>Если хочешь поиграть - нажми правой кнопкой мыши по экрану. </h1>`
        }
    }

    close() {
        const header = document.querySelector('.header')
        header.style.display = 'none'
    }
}