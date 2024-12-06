
// function takes input from user and prints sum
/* function findSum(){
    let arr=[];
    while(true){
        let n= prompt("Enter the number?"," ");
        if(n===null ||n==='' || !isFinite(n)) break;
        arr.push(+n);
    }
    let sum=0;
    for(let key of arr){
        sum+=key;
    }
    return sum;
}
alert(findSum()); */


//maxSubArraySum
/* let arr = [1, -2, 3, 4, -9, 6];

let sum=0;
let maxSum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
    maxSum=Math.max(sum,maxSum);
    if(sum<0) sum=0;
}
alert(maxSum); */


//foreach example
/* ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  }); */


/*   let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id:4, name:"John"}
  ];
  alert(users.find(item=>item.id===1).name);
  alert(users.findIndex(user => user.name == 'John')); 
  alert(users.findLastIndex(user => user.name == 'John'));  */



  //filter method
/*   let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  let someUsers = users.filter(item => item.id < 3);
  alert(someUsers.length);  */


  //map function
/*   let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
  alert(lengths); */


  //sort the number
//   function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   }
//   let arr = [ 1, 2, 15 ];
//   arr.sort(compareNumeric);
//   alert(arr);

//reduce method
/* let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); */


/* camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition'; */

/* alert(camelize("background-color"));

function camelize(str){
    return str
            .split('-') 
            .map((word,index)=>index==0?word:word[0].toUpperCase()+word.slice(1))
            .join("");
} */

//filter range inPlace
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); 
// alert( arr ); 

// function filterRangeInPlace(arr,a,b){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<a||arr[i]>b){
//             arr.splice(i,1);
//             i--;
//         }
//     }
// }


//Iterators

// for(let char of "test"){
//     alert(char);
// }


/* let str="test";
let iterator=str[Symbol.iterator]();
while(true){
    let result=iterator.next();
    if(result.done) break;
    alert(result.value);
}
 */