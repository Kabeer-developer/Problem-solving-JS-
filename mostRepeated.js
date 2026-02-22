let arr = [1,2,3,3,4,4,4,5,6,3,2,4,2,1];
let freq = {};
let maxCount =0;
let maxChar;

for(let a of arr){
    freq[a] = (freq[a] || 0)+1;
}

for(let a in freq){
    if(freq[a] > maxCount){
        maxCount = freq[a];
        maxChar = a;
    }
}
console.log(maxChar,maxCount);