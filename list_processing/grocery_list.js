function buyFruit(list) {
  let result = [];
  list.forEach(([item, num]) => {

    for (let itr = num; itr > 0; itr -= 1) {
      result.push(item);
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]