const deepClone = (obj)=> {
    if(obj === null || typeof obj !== "object") return obj;

    if(Array.isArray(obj)){
        return obj.map((item)=> deepClone(item));
    }

    for(let key in obj){
        result[key] = deepClone(obj[key]);
    }
    return result;
}

