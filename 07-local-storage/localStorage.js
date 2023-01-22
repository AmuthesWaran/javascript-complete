// Storing String in localStorage
localStorage.setItem('name', 'Ammu')

// retrieving the string stored in a localStorage 
localStorage.getItem('name')


// Storing and Retrieing non-strings in localStorage
const user = {
    name: 'Ammu',
    age: 23
}

const userJSONString = JSON.stringify(user)
console.log(userJSONString)

const userJSON = JSON.parse(userJSONString) 
console.log(userJSON)

// To Remove a Item from a localStorage using its Key
localStorage.removeItem('name')

// Removing all the items from the localStorage
localStorage.clear()
