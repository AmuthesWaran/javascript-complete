// Challenge 9

// A = 90 - 100
// B = 80 - 89
// C = 70 - 79
// D = 60 - 69
// E = 50 - 59
// F = 0 - 59

let gradeCalc = function (mark, totalMarks) {
    let percent = (mark / totalMarks) * 100
    let letterGrade = ''

    if(percent >= 90){
        letterGrade = 'A'
    }
    
    else if(percent >=80){
        letterGrade = 'B'
    }
    
    else if(percent >=70){
        letterGrade = 'C'
    }
    
    else if(percent >=60){
        letterGrade = 'D'
    }
    
    else if(percent >=50){
        letterGrade = 'E'
    }
    else {
        letterGrade = 'F'    
    }
        return `You got a ${letterGrade} (${percent}%)`
}

let result = gradeCalc(13,20)
console.log(result)