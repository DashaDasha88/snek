document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const scoreDisplay = document.querySelector('span')
  const startBtn = document.querySelector('.start')

  const width = 10
  let currentIndex = 0 // so first div in our grid
  let appleIndex = 0 //so first div in our grid
  let currentSnake = [2,1,0] //the head is 2; the tail is 0

  let direction = 1
  let score = 0
  let speed = 0.9
  let intervalTime = 0
  let interval = 0

  //assign functions to keycodes
  function control (e) {

    squares[currentIndex].classList.remove('snake') //removing the class of snake from ALL the squares

    if(e.keyCode === 39) {
      direction = 1
    } else if (e.keyCode === 38) {
      direction = -width
    } else if (e.keyCode === 37) {
      direction -1
    } else if (e.keyCode === 40) {
      direction = +width
    }

  }

  document.addEventListener('keyup', control)

})