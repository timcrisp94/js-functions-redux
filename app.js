console.log('hi')

function main() {
  let date = new Date()
  let sales = getSalesData(date)
  let labor = getLaborCosts(date)
  let budget = getBudget(date)
  let report = generateReport(date, sales, labor, budget)
  sendReport(report)
}

// Run the main function
main();

/*--- helper functions ---*/

function getSalesData(forDate) {
  let netSales = getNetSales(forDate)
  let salesTax = computeSalesTax(netSales)
  return {netSales, salesTax}
}

function getLaborCosts(forDate) {
  let staffCosts = getStaffCosts(forDate)
  let mgtCosts = getMgtCosts(forDate)
  return {staffCosts, mgtCosts}
}

function getBudget(forDate) {
  let salesBudget = getSalesBudget(forDate)
  let laborBudget = getLaborBudget(forDate)
  return {salesBudget, laborBudget}
}
