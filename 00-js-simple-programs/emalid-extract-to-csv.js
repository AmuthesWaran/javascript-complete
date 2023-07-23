const { readFile } = require('fs/promises')


var text;

var splittedArray;

var splittedArrayclean = [];

async function content(path) {
    return await readFile(path, 'utf8')
}

async function getAsText() {
    text = await content('./emailid.txt')
    console.log("\n");
    // console.log(text);
    console.log("\n");
    splittedArray = text.split(";")

    console.log(splittedArray);

    for (let i = 0; i < splittedArray.length; i++) {
        splittedArrayclean.push(splittedArray[i].trim());

    }

    console.log(splittedArrayclean);
}

getAsText()


