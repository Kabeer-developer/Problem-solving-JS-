
function throttle(fn,limit){
    let canRun = true;
    return function(){
        if(!canRun) return
        fn();
        canRun=false;

        setTimeout(() => {
        canRun=true;
    }, limit);
    }
}

const sayhello = ()=> {
    console.log("Hello");
}

const throttleRun = throttle(sayhello,1000);
setInterval(throttleRun,3000);