const express=require('express');
const mongoose=require('mongoose');
const nodemailer = require('nodemailer');
const dp=require('./connection')
const app=express();
const path=require('path');
const postModel=require('./postModel');
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//CRUD OPERATION
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.post('/person',async(req,res) => {
    const {name,email,message}=req.body;

        // Use nodemailer to send the email
        /*const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'vasanthmarshal2020@gmail.com',
            pass: '2020SASTRA'
          }
        });

        const mailOptions = {
          from: email,
          to:'vasanthmarshal2020@gmail.com',
          subject: name,
          text: message
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
          } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
          }
        });*/
         
    try{
        const newPost=await postModel.create({name,email,message});
        //res.json(newPost);
        res.redirect('/');
    }
    catch(error){
        res.status(500).send(error);
    }
}
);
/*app.get('/',async(req,res)=>{
    try{
        const posts=await postModel.find();
        res.json(posts);
    }
    catch(error){
        res.status(500).send(error);
    }

});

app.get('/:id',async(req,res) => {
    try{
        const {id} = req.params;
        const posts=await postModel.findById(id);
        res.json(posts);
    }
    catch(error){
        res.status(500).send(error);
    }   
});

app.put('/:id',async(req,res)=>
{
    const {id}=req.params;
    const {title,content}=req.body;
    try{
        const posts=await postModel.findByIdAndUpdate(id,{title,content});
        res.json(posts);
    }
    catch(error){
        res.status(500).send(error);
    }

});

app.delete('/:id',async(req,res)=>
{
    const {id}=req.params;
    try{
        const posts=await postModel.findByIdAndDelete(id,{title,content});
        //const post=await postModel.findById(id);
        //await post.remove();

        res.json("deleted succesfully");
    }
    catch(error){
        res.status(500).send(error);
    }

});*/




app.listen(3000,()=>{
    console.log('listening on port 3000');
});


