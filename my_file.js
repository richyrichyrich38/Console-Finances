
var total = 0
var greatestIncrease = 0
var greatestDecrease = 0
var totatMonths
var greatestIncreaseMonth
var greatestDecreaseMonth
var netChange = 0
var previousChange = 0


for (var main_index = 0; main_index < finances.length; main_index++){
    var profitLoss = finances[main_index][1]
    if (profitLoss > greatestIncrease) {
        greatestIncrease = profitLoss;
        greatestIncreaseMonth = finances[main_index][0]
    }
    if (profitLoss < greatestDecrease) {
        greatestDecrease = profitLoss
        greatestDecreaseMonth = finances[main_index][0]
    }
    var change = profitLoss - previousChange
    previousChange = change
    netChange += change
    total += profitLoss
}
// console.log(netChange)
// console.log(total)
var totalMonths = finances.length;
var averageChange = netChange / totalMonths





console.log(`Financial Analysis
--------------------
Total Months: ${totalMonths}
Total: ${total}
Average  Change: ${averageChange}
Greatest Increase in Profits: ${greatestIncreaseMonth} (${greatestIncrease})
Greatest Decrease in Profits: ${greatestDecreaseMonth} (${greatestDecrease})`)
;

