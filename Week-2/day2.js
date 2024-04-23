
 // callbacks..............

 function myFirst() {
    return("Hello");
  }
  
  function mySecond() {
    return("Goodbye");
  }
  
  myFirst();
  mySecond();


  function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
  myCalculator(5, 5);

 function squr(n){
    return n + n;
 }

 function sumofsque(a, b){
    let squre1 = squr(a);
    let squre2 = squr(b);
    return squre1 + squre2;
 }

  let ans = sumofsque(1, 2)
  console.log(ans);

  function cube(a){
    return a + a;
  }

  function cubesum(a, b){
    let cube1 = cube(a);
    let cube2 = cube(b);
    return cube1 + cube2;
  }

   let ans2 = cubesum(2,3);
   console.log(ans2);


 // Async Function.............

 function onDone(){
    console.log("Its Done");
 }

 setTimeout(onDone, 1000);
    console.log("After set time out");


 
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);