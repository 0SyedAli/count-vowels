class PersonAccount {
    firstname;
    lastname;
    incomes;
    expenses;

    constructor(firstname, lastname, incomes, expenses) {

        this.firstname = firstname
        this.lastname = lastname
        this.incomes = incomes
        this.expenses = expenses

    }

    totalIncome() {
        var total_income = 0

        for (var a=0;a<this.incomes.length;a++){
             
            var obj=this.incomes[a]
            total_income +=obj['income']
        }

        return total_income
    }



    totalExpense() {
        var total_expense = 0

        for (var a=0;a<this.expenses.length;a++){
             
            var obj=this.expenses[a]
            total_expense +=obj['expense']
        }

        return total_expense

    }
    addIncome() {}
    addExpense() {}
    accountBalance() {

       var inc = totalIncome() 
       var exp = totalExpense()
        return `Your account balance is : ${bal}`
    }

}

p1 = new PersonAccount('Rehan', 'Ali', [{ income: 10000, desc: "salary" }, { income: 1000, desc: "pocketmoney" }], [{ expense: 5000, desc: "party" }, { expense: 1000, desc: "fuel" }])


console.warn(`your total income is ${p1.totalIncome()}`)
console.warn(`your total expense is ${p1.totalExpense()}`)

console.log(p1.accountBalance())