let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(idNum, transArray) {
  return transArray.filter(transaction => transaction.id === idNum);
}

function isItemAvailable(idnum, transArray) {
  let totalQuant = transactionsFor(idnum, transArray).reduce((sum, transac) => {
    if (transac.movement === 'in') {
      return sum + transac.quantity;
    } else if (transac.movement === 'out') {
      return sum - transac.quantity;
    }
  }, 0);

  return totalQuant > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true