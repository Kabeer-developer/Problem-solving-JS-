

const memoize = (fn)=> {
      const cache = {}
    return function(...args){
        const key = JSON.stringify(args)
        if(cache[key]){
            console.log("cached")
            return cache[key]
        } 

        const result = fn.apply(this,args)
        cache[key] = result
        return result

    }
}

const slowAdd = (x,y)=> {
    return x+y;
}

const fastAdd = memoize(slowAdd);
console.log(fastAdd(2,3));
console.log(fastAdd(2,3));