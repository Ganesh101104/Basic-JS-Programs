let num=69;
let sum=5;
while (num!=0){
    let rem=num%10;
    sum+=rem
    num=parseInt(num/10);
}
console.log(sum);