// global variables
var total = 0
var greatestIncrease = 0
var greatestDecrease = 0
var totatMonths
var greatestIncreaseMonth
var greatestDecreaseMonth
var netChange = 0
var previousChange = 0


// loops through finances array
for (var main_index = 0; main_index < finances.length; main_index++){
    // creates array that stores just the numeric value
    var profitLoss = finances[main_index][1]
    // cycles through array to find the highest profit increase adding highest to itself as it goes and attributes that correlating month to the previously assigned array
    if (profitLoss > greatestIncrease) {
        greatestIncrease = profitLoss;
        greatestIncreaseMonth = finances[main_index][0]
    }
    // cycles through array to find the largest profit decrease adding lowest to itself as it goes and attributes that correlating month to the previously assigned array
    if (profitLoss < greatestDecrease) {
        greatestDecrease = profitLoss
        greatestDecreaseMonth = finances[main_index][0]
    }
    // calculates the accumulated change and adds it to netChange array ready for / with no of months
    var change = profitLoss - previousChange
    previousChange = change
    netChange += change
    // total numeric value of finances is added to total array
    total += profitLoss
}

// total months is obtained using the .length property and the average change is obtained by / the net change by no of months
var totalMonths = finances.length;
var averageChange = netChange / totalMonths


// console logged the outputs in the fashion requested and used template literals to output the data
console.log(`Financial Analysis
--------------------
Total Months: ${totalMonths}
Total: $${total}
Average  Change: $${averageChange}
Greatest Increase in Profits: ${greatestIncreaseMonth} ($${greatestIncrease})
Greatest Decrease in Profits: ${greatestDecreaseMonth} ($${greatestDecrease})`)
;

