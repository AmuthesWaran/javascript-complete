let myAccount = {
    name: 'Aravind',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount
otherAccount = {} // we can change only properties 

otherAccount.income = 1000

let addExpense = function(account, amount){
//    account = {} // we can only change the properties of an object using an function
    account.expenses = account.expenses + amount
    console.log(account);
}

let addIncome = function(account, amount){
    account.income = account.income + amount
}

let resetAccount = function (account){
    account.income = 0
    account.expenses = 0
}

let getAccSummary = function(account){
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`
}

addIncome(myAccount, 5000)
addExpense(myAccount, 100)
addExpense(myAccount, 400)

console.log(getAccSummary(myAccount))

resetAccount(myAccount)

console.log(getAccSummary(myAccount))


