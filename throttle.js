
function throttle(fn,limit){
    let canRun = true;
    return function(){
        if(!canRun) return;
        fn();
        canRun = false;

        setTimeout(() => {
            canRun=true;
        }, limit);
    }
}

const sayHello = ()=> console.log("Hello");

const throttleHello = throttle(sayHello,1000);
setInterval(throttleHello,2000);