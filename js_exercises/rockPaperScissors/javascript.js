

const enterButton = document.getElementById('enterButton')
enterButton.addEventListener('click', function () {
    let userHand = document.getElementById('userPlay').value
    let pcHand = cpuPlay()
    let winner = winningPlay(userHand, pcHand)

    console.log('User Play: ' + userHand)
    console.log('PC Play: ' + pcHand)
    console.log('Winner: ' + winner)

})

function cpuPlay() {   
    let cpuRoll = Math.floor(Math.random() * (3) + 1)
    if (cpuRoll === 1) {
        let cpuHand = 'rock'
        return cpuHand
    }
    else if (cpuRoll === 2) {
        let cpuHand = 'paper'
        return cpuHand
    }
    else if (cpuRoll === 3) {
        let cpuHand = 'scissor'
        return cpuHand
    }
  }

  function winningPlay(user, cpu) {
    let userSelection = user.toLowerCase()
    let cpuSelection = cpu.toLowerCase()

    if (userSelection === 'rock' && cpuSelection === 'rock') {
        return 'tie'
    }
    else if (userSelection === 'rock' && cpuSelection === 'paper') {
        return 'cpu'
    }
    else if (userSelection === 'rock' && cpuSelection === 'scissor') {
        return 'user'
    }
    else if (userSelection === 'scissor' && cpuSelection === 'rock') {
        return 'cpu'
    }
    else if (userSelection === 'scissor' && cpuSelection === 'scissor') {
        return 'tie'
    }
    else if (userSelection === 'scissor' && cpuSelection === 'paper') {
        return 'user'
    }
    else if (userSelection === 'paper' && cpuSelection === 'scissor') {
        return 'cpu'
    }
    else if (userSelection === 'paper' && cpuSelection === 'paper') {
        return 'tie'
    }
    else if (userSelection === 'paper' && cpuSelection === 'rock') {
        return 'user'
    }      
  }