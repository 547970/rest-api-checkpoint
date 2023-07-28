const mongoose=require('mongoose')

const userSchema=mongoose.Schema(
    {
        name:{type:String,required:true},
        age:Number,
        email:String,
        password:String
    }
)
const User=mongoose.model('users',userSchema)
module.exports=User