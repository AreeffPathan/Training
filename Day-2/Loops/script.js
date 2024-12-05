

// printing even numbers between 2 to 10
/* for(let i=2;i<10;i++){
    if(i%2==0){
        console.log(i);
    }
} */


    // same code in for and while loops
   /*  for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
    }

    let i=0;
    while(i<3){
        alert(`number ${i}!`);
        i++;
    }   */

//taking input until it is greater than 100
/* while(true){
    let input=+prompt("enter value greater than 100");
    if(input>100){
        break;
    }
} */


//prime number code
let n=+prompt("Enter the number");
let count=0;
for(let i=1;i<=n;i++){
    if(n%i==0){
        count++;
    }
}
if(count==2){
    alert("Prime Number");
}
else{
    alert("not a prime number");
}