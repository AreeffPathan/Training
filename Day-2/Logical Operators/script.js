
/* Task-1
let val=Number(prompt("Enter the age?",20));
if(val>=14&&val<=90){
    alert("age is present in the range");
}
 */


/* Task-2
let val=Number(prompt("Enter the age?",20));
if(!(val>=14&&val<=90)){
    alert("age is present in the range");
} */



let userName=prompt("Enter the userName?",'');
if(userName==="Admin"){
    let password=prompt("enter the password?",'');
    if(password==="TheMaster"){
        alert("Welcome");
    }
    else if(password===''||password===null){
        alert("Canceled");
    }
    else{
        alert("wrong Password");
    }
}
else if(userName===''||userName===null){
    alert("canceled");
}
else{
    alert("other");
}