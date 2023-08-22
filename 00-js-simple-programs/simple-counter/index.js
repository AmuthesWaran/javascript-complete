let counter = document.getElementById('counter')
console.log(counter)

counter.innerText = 0


const add = () => {

    if (parseInt(counter.innerText) >= 0) {
        counter.innerText = parseInt(counter.innerText) + 1
    }


}


const sub = () => {

    if (parseInt(counter.innerText) === 0) {

    }
    else {
        counter.innerText = parseInt(counter.innerText) - 1
    }
}