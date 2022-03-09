// Write your code below this line.
const luckyNumber = (num) => {
  let RanNums = [];
  if (10 > num > 0) {
    for (let i = 0; i < num; i++) {
      let RanNumber = Math.floor(Math.random() * 10 + 1);
      if (RanNums.includes(RanNumber) === false) {
        RanNums.push(RanNumber);
      } else {
        i--;
      }
    }
    return RanNums;
  }
};

console.log(luckyNumber(9));
