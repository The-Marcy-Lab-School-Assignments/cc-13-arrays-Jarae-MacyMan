//write your code here
const averageInArray = function(aRR){
  let sum = 0; 
  for (let i = 0; i < aRR.length; i++){
    sum += aRR[i];
  }
  let avg = (sum/aRR.length);
  return avg;
};

console.log(averageInArray([2, 2, 5, 10]));