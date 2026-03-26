function wait(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello Kabeer"},2000);
    }
}

async function run(){
    const result = await wait();
    console.log(result);
}

run();
