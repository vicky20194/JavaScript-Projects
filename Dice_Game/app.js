let playerOneScore = 0
let playerTwoScore = 0
let playerOne = true
let message = document.getElementById('message')
let playerOneRolled = document.getElementById('player1rolled')
let playerTwoRolled = document.getElementById('player2rolled')
let scoreOne = document.getElementById('score1')
let scoreTwo = document.getElementById('score2')
let rolebtn = document.getElementById('rolebtn')
let resetbtn = document.getElementById('resetbtn')

function rolled(){
    let value = (Math.floor(Math.random() * 6)) + 1
    if(playerOne){
        playerOneScore += value
        scoreOne.textContent = playerOneScore
        playerOneRolled.textContent = value
        playerOneRolled.classList.remove("active")
        playerTwoRolled.classList.add("active")
        message.textContent = "Player 2 Turn"
    }else{
        playerTwoScore += value
        scoreTwo.textContent = playerTwoScore
        playerTwoRolled.textContent = value
        playerTwoRolled.classList.remove("active")
        playerOneRolled.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    playerOne = !playerOne

    if(playerOneScore >= 20){
        message.textContent = "Player One Won!"
        rolebtn.style.display = "none"
        resetbtn.style.display = "block"
    }else if(playerTwoScore>=20){
        message.textContent = "Player Two Won!"
        rolebtn.style.display = "none"
        resetbtn.style.display = "block"
    }
}

rolebtn.addEventListener('click', rolled)
