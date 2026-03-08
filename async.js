
function waitOneSecond(){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve("done waiting");
        }, 1000);
    });
}

async function run(){
    const result = await waitOneSecond();
    console.log(result);
}