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
    // console.log(keys);
    // console.log(values);

    let resultArray = []

    for (let c = 0; c < localStorage.length; c++) {
        resultArray.push(`${keys[c]} - ${values[c]}`)
    }
    // console.log(resultArray);

    return resultArray
}

function createTableResult (arrayWithResult) {
    const body = document.querySelector('body')
    const container = document.createElement('div')
    container.classList = 'game'
    body.append(container)

    console.log(arrayWithResult);
   
    

    arrayWithResult.forEach((item) => {

        const rowTable = document.createElement('div')
        rowTable.classList = 'rowTable'
        rowTable.textContent = item

        // По такой логике помещаем то, как хотим, чтобы называлась ваша игра и выдавала результат
        if (item == 'DrumGame - true') {
            rowTable.textContent = 'Барабаны - пройдены'
        }
        //  Игра на рекцию
        container.append(rowTable)
    })
}