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

})