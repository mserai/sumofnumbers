const testNumbs = [1, 2, 3, 4];

function sumFor(numbs){
  let total = 0;
  for (const numb of numbs){
    total += numb;
  }
  return total;
}
console.log(sumFor(testNumbs));

function sumWhile(numbs) {
  let total = 0;
  let i = 0;
  while (i < numbs.length) {
    total += numbs[i];
    i++;
  }
  return total;
}
console.log(sumWhile(testNumbs));

function sumRecursion (numbs){
  if (numbs.length === 0){
    return 0;
  }
  return numbs[0] + sumRecursion(numbs.slice(1, numbs.length));
}
console.log(sumRecursion(testNumbs));

function sumTheSimpleWay(numbs){
  return _.reduce(numbs, function(memo, num) {return memo + num; },0);
}
console.log(sumTheSimpleWay(testNumbs));

