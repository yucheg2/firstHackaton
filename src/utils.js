export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function closeGameContainer(){
  const gameContainer = document.querySelector('.game-container')
  gameContainer.style.opacity = "0"
}