
function debounce(fn,delay){
    let timer;
    return function(){
        clearTimeout(timer)
        timer = setTimeout(fn,delay);
    }
}

function sayHello(){
    console.log("hello");
}

const debounceFunc = debounce(sayHello,2000);
debounceFunc();
debounceFunc();
debounceFunc();
debounceFunc();
console.log("called 4 times")
