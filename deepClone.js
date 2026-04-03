const deepclone = (obj)=> {
    if(obj === null || typeof obj !== "object") return obj;

    if(Array.isArray(object)){
        return obj.map((item)=> deepclone(item));
    }

    let result = {}
    for(let key in obj){
        result[key] = deepclone(obj[key]);
    }
    return result;
}

const object = {
    a : 10
}

const clone = deepclone(object);
clone.a = 100;
console.log(object.a);
console.log(clone.a);
