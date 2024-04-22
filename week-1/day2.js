function getlenth(str){
    console.log("what is my str", str);
    console.log("What is length of this =",str.length)
 
 }
 
 getlenth("Vishal")

 const value = "Vishal babar";
let ans = value.substr(2, 4); //shal
let ans2 = value.slice(2, 4); //sh

console.log(ans);
console.log(ans2);

//repless

const str = "Vishal babar";

console.log(str.replace("babar", "Babar"));

//split is nothing but its convated in to arry;

let name = "Vishal Ashok Babar";

let output = name.split("");

console.log(output);


//objects......

const dog = {
    name : "dogggiy",
    legcounts: 2,
    apeaks :"booow bbbow"
}

const cat = {
    name : "pricess",
    legcounts: 2,
    apeaks :"mauuuuuuu mauuuu"
}

function strr(animal){
   console.log("animal" + animal["name"] + " " + animal["apeaks"]);
}


strr(dog);
strr(cat);




