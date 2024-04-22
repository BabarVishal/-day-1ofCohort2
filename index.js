console.log("Hy Vishal Noe lets start!");

let a = 22;
a = "Hello";
console.log(a);


let name = "Vishal";
let lastname = "Babar";
let done = true;

console.log( name + lastname);

if(done == true){
    console.log(name,"its my name")
}else{
    console.log("its not my name");
}

let ans = 0;

for(let i = 0; i <=1000; i = i + 1){
    ans = ans + i;
}

console.log(ans);



const ages = [22, 444,55,44,2,6,7];
const agesnum = ages.length;

for(let i = 0; i < agesnum; i++){
    if(ages[i] % 2 ==0){
        console.log(ages[i]);
    }
}
 
const person = [{
    name:"vishal",
    gender: "male",
},{
    name: "pk babar",
    gender: "female",
}]

for(let i = 0; i < person.length; i++){
    if(person[i]["gender"]=="male"){
        console.log(person[i]["name"]);
    }
}
