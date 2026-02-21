let number = 12345;
let rev=0;
while( number > 0){
    a = number%10;
    rev =rev*10 + a;
    console.log(rev)
    number = Math.floor(number/10);
}
