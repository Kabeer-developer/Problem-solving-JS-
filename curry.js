function curry(a,b){
    if(b!==undefined){
        return a+b;
    }
    return function subCurry(b){
        return a+b;
    }
}

console.log(curry(1)(2));
console.log(curry(1,2));