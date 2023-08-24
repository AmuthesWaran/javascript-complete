let counter = document.getElementById('counter')
let counterText = document.getElementById('counterText')

console.log(counter)
console.log(counterText)
counter.innerText = 0


const add = () => {

    if (parseInt(counter.innerText) >= 0) {
        let count = parseInt(counter.innerText) + 1
        counter.innerText = count
        counterText.innerText = `You have got ${count} messages`
    }


}


const sub = () => {

    if (parseInt(counter.innerText) === 0) {

    }
    else {
        counter.innerText = parseInt(counter.innerText) - 1
    }
}

const clearAll = () => {

    counter.innerText = 0
    counterText.innerText = `You have got 0 messages`


}