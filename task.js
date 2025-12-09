"use strict";

function solveEquation(a, b, c) {
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  
  if (discriminant < 0) {
    return [];
  }
  

  if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  }
  
  const sqrtDiscriminant = Math.sqrt(discriminant);
  const root1 = (-b + sqrtDiscriminant) / (2 * a);
  const root2 = (-b - sqrtDiscriminant) / (2 * a);
  
  return [root1, root2];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseFloat(countMonths);
  
  const monthlyPercent = percent / 100 / 12;
  const loanBody = amount - contribution;
  
  if (loanBody <= 0) {
    return Math.round(contribution * 100) / 100;
  }
  
  const monthlyPayment = loanBody * 
    (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));
  
  const totalAmount = contribution + monthlyPayment * countMonths;
  
  return Math.round(totalAmount * 100) / 100;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));
