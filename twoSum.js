const twoSum = (arr,target)=> {
    const map ={};
    for (let i=0; i< arr.length;i++){
        const diff = target - arr[i];
        if(map[diff] !== undefined) retun [map[diff],i]
        map[arr[i]] = i;
    }
}