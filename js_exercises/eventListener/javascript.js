const enterButton = document.getElementById('enterButton')
enterButton.addEventListener('click', function () {
    let inputValue = document.getElementById('inputBox').value
    for (let step = 1; step <= inputValue; step++) {
        if (step%3 === 0 && step%5 === 0) {
            let outputValue = 'FizzBuzz'
            console.log(outputValue)
        }
        else if (step%3 === 0) {
            let outputValue = 'Fizz'
            console.log(outputValue)
        }
        else if (step%5 === 0) {
            let outputValue = 'Buzz'
            console.log(outputValue)
        }
        else {
            let outputValue = step
            console.log(outputValue)
        }
    }
})