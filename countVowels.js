let word = "kabeer";
let n = word.length;
let count =0;
for(i=0;i<n;i++){
    if(word[i]=="a"||word[i]=="e"||word[i]=="i"||word[i]=="o"||word[i]=="u"){
        count++
    }
}
console.log(count);