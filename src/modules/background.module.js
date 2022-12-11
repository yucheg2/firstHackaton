import { Module } from '../core/module'

export class BackgroundModule extends Module {
    constructor (type,text) {
        super (type, text)
    }

    trigger () {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
          
          let red = getRandomInt(255);
          let green = getRandomInt(255);
          let blue = getRandomInt(255);
          
        let color = "rgb(" + red + "," + green + "," + blue + ")";
        document.body.style.background = color
    }

}

