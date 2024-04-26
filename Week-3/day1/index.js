const express = require("express");
const app = express();
const port = 3000;

// const username = req.heders.username;
// const password = req.heders.password;
// const kidneyID= req.heders.kidney;

// function userMiddleware(req, res, next){
//       if(username != "Vishal" && password != "pass"){
//         res.json({
//             msg:"InCorrect Inpute",
//         })
//       }else{
//          next();
//       }
// };

// function kidneyMiddeleware(req, res, next){
//   if(kidneyID != 1 && kidneyID != 2){
//     res.json({
//         msg:"InCorrect ID",
//     })
//   }else{
//     next();
//   }
// };

// let numberOfRequest = 0;
// function CalculatedRequres(req, res, next){
//     numberOfRequest ++;
//     console.log(numberOfRequest);
//     next();
// }
// app.use(express.json());
// app.post("/home",CalculatedRequres, (req,res)=>{
//     console.log(req.body);
//     res.json({
//         msg:"Hi There"
//     })
// })


// app.get("/",userMiddleware, kidneyMiddeleware, (req, res)=>{
// res.send("Your Home Is Good!")
// })


// //Global Catches................................
//  app.use(express.json())

// app.post("/About", (req, res)=>{
//     const number = req.body.number;
//     const countNumber = number.length;

//     res.send("you number" + countNumber +"this!")
// });

// // Global Catches
// app.use(function(err,req,res,next){
//     res.json({
//         msg:"sorry"
//     })
// })


app.get("/", (req,res)=>{
  res.send("Its a home page")
})

app.listen(port, console.log("Its Working"));