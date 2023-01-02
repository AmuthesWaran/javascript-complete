let myBook = {
    title: 'How to learn',
    author: 'Ammu',
    pageCount: 92
}


let myBook2 = {
    title: 'How to learn programming',
    author: 'Amuthe',
    pageCount: 148
}


let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }


    // console.log(`${book.title} by ${book.author}`)
}


// getSummary(myBook)
// getSummary(myBook2)

let bookSummary = getSummary(myBook)

console.log(bookSummary);
console.log(bookSummary.summary);
console.log(bookSummary.pageCountSummary);


// Challenge 11


let fahrenheitCalc = function(fahrenheitGiven){
    return{
        fahrenheit: fahrenheitGiven,
        fahrenheitToCelsius: (fahrenheitGiven - 32) * (5/9),
        fahrenheitToKelvin: 5/9 * (fahrenheitGiven + 459.67)
    }
}

let calc = fahrenheitCalc(23)
console.log(calc)

console.log(calc.fahrenheit)
console.log(calc.fahrenheitToKelvin)
console.log(calc.fahrenheitToCelsius)

