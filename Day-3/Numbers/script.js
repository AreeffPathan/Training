/* 
Task-1
let a = +prompt("Enter first value"," ");
let b = +prompt("Enter Second Value"," ");

alert(a+b); */


//Task-2
/* function readNumber() {
    let num;
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
    if (num === null || num === '') return null;
    return +num;
  }
  alert(`Read: ${readNumber()}`); */



  //math.random in a given range

/*   let lowLimit=+prompt("Enter first value?","");
  let highLimit = +prompt("Enter sencond value?","");
  alert(findRandom(lowLimit,highLimit));

  function findRandom(a,b){
    return a + Math.random() * (b-a);
  } */



      //math.random in a given range must be integer


function randomInteger(min, max) {
     let rand = min + Math.random() * (max + 1 - min);
     return Math.floor(rand);
}
alert( randomInteger(1, 3) );