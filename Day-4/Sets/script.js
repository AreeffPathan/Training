
//Task-1
/* let set=new Set(["banana","Mango", "Grapes"]);
for(let val of set) alert(val);
set.forEach((value,valueAgain,set)=>{
    alert(value);
}) */


//find Unique

/* function unique(arr) {
    return Array.from(new Set(arr));
  }
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) ); // Hare, Krishna, :-O */


  //filter anagrams
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// alert( aclean(arr) );

// function aclean(arr){
//     let map=new Map();
//    for(let word of arr){
//      let sorted= word.toLowerCase().split("").sort().join("");
//      map.set(sorted,word);
//    }
//    return Array.from(map.values());

// }