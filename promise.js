const wait = new Promise((resolve,reject)=> {
    setTimeout(() => {
        resolve("promise resolved");
    }, 1000);
});
wait.then(m=> console.log(m));