

const express = require('express');
const app = express();
const Port = 3000;
const mongoose  = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const user = require('./models/user.js')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors())

app.post('/register' , async(req,res) =>{
     const {name,password , email} = req.body
     try {
          const newUser = new user({name , password , email })
          await newUser.save();
        res.send("Registration Sucessfully")
     } catch (error) {
          console.log(error , "This email is already use")
     }
});
// Mongodb connection
const startServer= async()=>{
  try {
     await mongoose.connect('mongodb://localhost:27017/registerDatabase')
     console.log('MOngodb is connected');
  } catch (error) {
     console.log(error , "eror")
  };

};
startServer();


app.get('/' , (req,res) =>{
     res.send("hello world")
});


app.listen(Port , () =>{
    console.log(`server is runing on ${Port}`)
})