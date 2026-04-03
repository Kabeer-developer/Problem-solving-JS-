function wait(){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve("hello kabeer");
        }, 2000);
    })
}

async function run(){
    const result = await wait();
    console.log(result);
}

run();