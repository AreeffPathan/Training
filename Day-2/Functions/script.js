//minimum of 2 numbers
/* 
let a=+prompt("Enter first value");
let b=+prompt("Enter second value");
let ans=findMin(a,b);
alert(ans);

function findMin(a,b){
    return (a>b)? b:a;
}
 */






/* function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
 */


//same code using arrow Functions
/* function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    ()=> { alert("You agreed."); },
    ()=> { alert("You canceled the execution."); }
  ); */


 // find power of a number

/* let a=+prompt("Enter first value");
let b=+prompt("Enter second value");
let ans=findPower(a,b);
alert(ans);

function findPower(a,b){
    let pow=1;
    for(let i=1;i<=b;i++){
        pow*=a;
    }
    return pow;
} */

for(let i=0;i<10;i++){
    console.log(i);
}