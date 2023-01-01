// Global Scope (FtoC, value3, value4)
  // Local Scope(fahrenheit, celsius)
    // 


let FtoC = function(fahrenheit){
    let celsius =  (fahrenheit - 32) * 5/9
    
    if (celsius <=0){
        let isFreezing = true
    }

    return celsius
}

let value3 = FtoC(32)
let value4 = FtoC(68)

console.log(value3);
console.log(value4);