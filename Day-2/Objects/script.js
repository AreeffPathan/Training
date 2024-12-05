/* let obj={
    name :"John",
    surName :"Smith"
}
obj.name="pete";
delete obj.name;
console.log(obj); */


// finding sum of all values
/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum=0;
for(let key in salaries){
    sum += salaries[key];
}
alert(sum);
 */

//calculator
/* let calculator = {
    sum(){
      return this.a + this.b;
    },
    mul(){
      return this.a * this.b;
    },
    read(){
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
};
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() ); */


  //another way of writing this
/*   function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() ); */




  //Accumulator Example

  function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('How much to add?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);