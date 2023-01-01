// Multiple Arguments
let add = function (num1, num2) {
    return num1 + num2
}

let result = add(13, 6)
console.log(result)

// Default arguments
let getScoreText = function (name = 'anonymous', score = 0){
    // console.log(name);
    // console.log(score);
    return 'Name: ' + name + ' Score ' + score
}

// getScoreText()

let playerScore = getScoreText(undefined, 90)
console.log(playerScore)


// Challenge 8
// Tip Calculator

let CalculateTip = function (total = 0, tipPercent = .2) {
    let tip = total * tipPercent
    console.log(`A ${tipPercent*100}% on ${total} would be $${tip}`)
    
}

let tipAmount = CalculateTip(100, .1)
console.log(tipAmount)
