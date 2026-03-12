function Duplicate(arr){
    let seen = new Set();
    let dup = new Set();

    for (let item of arr){
        if(seen.has(item)){
            dup.add(item);
        } else {
            seen.add(item);
        }
    }
    return [...dup]
}

console.log(Duplicate([1,2,3,4,3,2,4,2,1,5,6]))