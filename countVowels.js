let word = "magnesium";
let count=0;
for(i=0;i<word.length;i++){
    console.log(word[i]);
    if(word[i] == "a"||word[i] =="e"||word[i] =="i"||word[i] =="o"||word[i] =="u"){
        count++;
    }
}
console.log(count);