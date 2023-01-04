let varOne = 'varOne'   //Global Scope

if (true){
    console.log(varOne);
    let varTwo = 'varTwo'   //Local Scope
    // console.log(varTwo);
    // console.log(varThree);
    if(true){
        let varThree = 'vatThree'
        console.log(varThree);
        console.log(varTwo);
    }

    // console.log(varThree);
}

// console.log(varTwo);


//Lexical Scope (Static Scope)
//Global Scope  - Defined outside of all the code blocks
//Local Scope   - Defined inside a code block