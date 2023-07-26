const { readFile, writeFile } = require('fs/promises')


var text;

var splittedArray;

var splittedArrayclean = []
var fnameclean = []

var outputcsv;


async function content(path) {
    return await readFile(path, 'utf8')
}


async function getAsText() {
    text = await content('./emailid.txt')
    console.log("\n");
    // console.log(text);
    console.log("\n");
    splittedArray = text.split(";")

    // console.log(splittedArray);

    for (let i = 0; i < splittedArray.length; i++) {
        splittedArrayclean.push(splittedArray[i].trim());
        fnameclean.push(splittedArray[i].trim().split('.')[0])
    }

    // console.log(splittedArrayclean)
    // console.log(fnameclean)
    const csvRows = [];

    const headers = ["firstname", "email"];

    csvRows.push(headers.join(","))



    for (let i = 0; i < fnameclean.length; i++) {
        csvRows.push(fnameclean[i] + "," + splittedArrayclean[i]);

    }

    outputcsv = csvRows.join('\n')

    writeFile("./output.csv", outputcsv)

}



getAsText()


