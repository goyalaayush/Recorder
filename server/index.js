const express=require('express');
const cors=require('cors');
const app=express();
const mongoose=require('mongoose');
const Users=require('./models/Users');
const Recording=require('./models/Recording');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
mongoose.connect('mongodb+srv://aayushgoyal91:YNdIQxJj0KYkfhyh@cluster0.4cnsy65.mongodb.net/')
const jwt=require('jsonwebtoken');
const cookieparser=require('cookie-parser');

const secret='fdgdfgdgfdfbfghfghfsdas';

app.use(cookieparser());
app.use(cors({credentials:true,origin:'http://localhost:3000'}));

app.use(express.json());

app.post('/register',async(req,res)=>{

    const {email,pass}=req.body;
     
    

    try{
    const resp=await Users.create({
        email,password:bcrypt.hashSync(pass, salt)
    })

    res.json(resp);
}catch(e)
{
    res.status(400).json(e);
}
})

app.post('/login',async(req,res)=>{

    const{email,pass}=req.body;

    const userdoc= await Users.findOne({email});

   const passok= bcrypt.compareSync(pass, userdoc.password);
 
   if(passok)
   {
       jwt.sign({email,id:userdoc._id},secret,{},(err,token)=>{

        if(err) throw err;
        res.cookie('token',token).json({email,id:userdoc._id});

       })
       
   }
   else
   {
    res.status(400).json('wrong credentials');
   }


})


app.post('/recording',(req,res)=>{


     const {token}=req.cookies;
     const {url}=req.body;

      jwt.verify(token,secret,{},async(err,info)=>{

        if(err) throw err;

        const doc=await Recording.create({
            path:url,
            author:info.id,
        })

        res.json(doc);
      })

   

})


app.listen(4000);