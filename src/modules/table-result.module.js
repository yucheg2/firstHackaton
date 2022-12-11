import { Module } from "../core/module";
import '../../styles/table-result.css'

export class TableResult extends Module {
    constructor (type, text) {
        super (type, text)
        this.type = type
        this.text = text
    }

    trigger() {
        let localDataArray = getResultFromLocalStorage ()
        createTableResult(localDataArray)
    }
}

function getResultFromLocalStorage () {
    const resultGame = localStorage.getItem('reactionResult')

    let keys = []
    let values = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let value = localStorage.getItem(key)
        keys.push(key)
        values.push(value)
    }

    let resultArray = []

    for (let c = 0; c < localStorage.length; c++) {
        resultArray.push(`${keys[c]} - ${values[c]}`)
    }

    return resultArray
}

function createTableResult (arrayWithResult) {
    const body = document.querySelector('body')
    const container = document.createElement('div')
    container.classList = 'game'
    body.append(container)

    const innerContainer = document.createElement('div')
    innerContainer.classList = 'game-table'
    container.append(innerContainer)
 
    arrayWithResult.forEach((item) => {
        const rowTable = document.createElement('div')
        rowTable.classList = 'rowTable'
        rowTable.textContent = item

        innerContainer.append(rowTable)

        if (item == 'DrumGame - true') {
            rowTable.textContent = 'Барабаны - пройдены'
        }

        if (item.includes('reactionResult')) {
            rowTable.textContent = `Игра на реакцию - ${item.split('-')[1]} мс`
        }

        if (item.includes('attempts')) {
            rowTable.innerHTML = `Количество попыток <br> в игре угадай число  - ${item.split('-')[1]}`
        }

        if (item.includes('name')) {
            rowTable.remove()
        }
    })
}