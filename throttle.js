function throttle(fn,limit){
    let canRun = true;
    return function(){
        if(!canRun) return
        fn();
        canRun = false;

        setTimeout(()=> {
            canRun=true
        },limit)
    }
}

const sayHello = ()=> console.log("hello");

const throttleRun = throttle(sayHello,1000);
setInterval(throttleRun,3000);