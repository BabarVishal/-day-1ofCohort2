const express = require('express')
const app = express()
const port = 3000
const db = require('./DB');

const HostelBoys = require('./module/Hostelboys');
const Singin = require('./module/SingIn');
// const Singin = require('./module/SingIn');

app.post("/SingIn", async(req, res) =>{
     try {
        const data = req.data;
        const newdata = new Singin(data);
        const responce = await newdata.save();
        console.log('data save');
        res.status(200).json(responce);
     } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
     }
})

app.get('/SingIN', async(req,res) =>{
    try {
        const data = await Singin.find();
        console.log('data fetched');
        res.status(200).json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }
})
app.post('/', async(req,res) =>{
    try {
       const data = req.data;
       const newdata = new HostelBoys(data);
       const responce = await newdata.save();
       console.log('data save');
       res.status(200).json(responce);

    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }
})

app.get('/Student', async(req,res) =>{
    try {
        const data = await HostelBoys.find();
        console.log('data fetched');
        res.status(200).json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})