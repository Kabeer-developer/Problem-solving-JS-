let arr = [1,2,4,5];

let arrLen = arr.length+1;

const expectedSum = ((arrLen*(arrLen+1))/2);
const currentSum = arr.reduce((a,b)=> a+b,0);

const missingNum = expectedSum - currentSum;
console.log(missingNum);