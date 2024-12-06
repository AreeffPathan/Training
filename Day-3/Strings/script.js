/* let str = 'As sly as a fox, as strong as an ox';

let target="as";

let pos=0;
while(true){
    let foundPos=str.indexOf(target,pos);
    if(foundPos==-1) break;
    alert(`found at ${foundPos}`);
    pos=foundPos+1;
} */



//Task-2
let str="";
for(let i=65;i<=220;i++){
    str+=String.fromCodePoint(i);
}
alert(str);