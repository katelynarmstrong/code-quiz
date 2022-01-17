var initials = localStorage.getItem('initials')
var score = localStorage.getItem('score')
var scoreArea = document.querySelector('.scores')
var initialArea = document.querySelector('.initials')
scoreArea.textContent = score
initialArea.textContent = initials