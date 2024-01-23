const mongoose = require('mongoose');

const plm = require('passport-local-mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/pin").then(()=>console.log("connected  to databse (☞ﾟヮﾟ)☞✅"))


const userSchema = new mongoose.Schema({

  username: String,
  fullname: String,
  email: String,
  password: Number,
  profileImage: String,
  boards:{
    type:Array,
    default:[]
  },
  post:[{
    type : mongoose.Schema.Types.ObjectId,
    ref:"post"
  }]
 
});

userSchema.plugin(plm);

module.exports = mongoose.model("user" , userSchema)
