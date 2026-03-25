const promiseAll = (promises)=> {
    return new Promise((resolve,reject)=> {
        let results=[];
        let count = 0;

        promises.forEach((p,i) => {
            Promise.resolve(p)
            .then((res)=> {
                results[i] = res;
                count++;
                if(count === promises.length) resolve(results);
            })
            .catch(reject)
        });
    })
}