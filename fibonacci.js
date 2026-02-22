let n = 7;

let a=0,b=1;

for(let i=1; i<=n;i++){
    console.log(a);
    next = a+b;
    a=b;
    b=next;
}
