export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function closeGameContainer(selector){
  const gameContainer = document.querySelector(selector)
  gameContainer.style.opacity = "0"
}
 
export function randomColor() {
  const red = random(1, 255)
  const green = random(1, 255)
  const blue = random (1, 255)
  return `rgb(${red}, ${green}, ${blue})`
}

export function stopPreviousGame() {
  const game = document.querySelector('.game')
  if (game) {
    game.remove()  
  }
}