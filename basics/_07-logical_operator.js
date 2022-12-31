let username = 'user1'
let password = 'user1'

if (username === password){
    console.log('Login Success');
}

else{
    console.log('Login Failed');
}


// && - Logical AND
// || - Logical OR
// !  - Logical NOT 

let isHomeWorkDone = true
let isRoomClean = false

if(isHomeWorkDone && isRoomClean){
    console.log('Binge Netflix');
}
else{
    console.log('complete all your tasks');
}


// Challenge 6

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes');
} else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegam options');
} else {
    console.log('Offer up anything on the menu');
}