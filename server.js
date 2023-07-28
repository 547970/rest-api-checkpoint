const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const user=require('./models/user')

dotenv.config({path:"./config/.env"})
const app=express()
app.use(express.json())

mongoose.connect(process.env.mongoatlas).then(()=>console.log("db connected"))

app.post('/post',async(req,res)=>{
    try{
        const newuser=await user.create(req.body)  
        res.status(201).json({msg:'user created',user:newuser})

    }
   catch(err){
    res.status(500).json({msg:err})
   }
})
app.get('/',async(req,res)=>{
    try{
        const users=await user.find()  
        res.status(200).json({msg:'get users',user:users})

    }
   catch(err){
    res.status(500).json({msg:err})
   }
})
app.delete('/delete/:id',async(req,res)=>{
    try{
        const userdeleted=await user.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({msg:'user deleted',userdeleted:userdeleted})

    }
   catch(err){
    res.status(500).json({msg:err})
   }
})
app.put('/update/:id',async(req,res)=>{
    try{
        const userupdated=await user.findByIdAndUpdate({_id:req.params.id},{...req.body})
        res.status(200).json({msg:'user updated',userupdated:userupdated})

    }
   catch(err){
    res.status(500).json({msg:err})
   }
})
app.listen(process.env.port,()=>console.log('server is running in port:',process.env.port))
