const wait = new Promise((resolve,reject)=> {
    setTimeout(() => {
        resolve("promise resolved");
    }, 2000);
});
wait.then(m=> console.log(m));
