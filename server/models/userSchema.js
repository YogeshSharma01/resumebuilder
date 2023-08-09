const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    work:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
    resumedata:[
        {
            name:{
                type:String,
                required:true,
            },
            email:{
                type:String,
                required:true,
            },
            phone:{
                type:Number,
                required:true,
            },
            address:{
                type:String,
                required:true,
            },
            github:{
                type:String,
                required:true,
            },
            linkdin:{
                type:String,
                required:true,
            },
            portfolio:{
                type:String,
                required:true,
            },
            education10:{
                type:String,
                required:true,
            },
            education12:{
                type:String,
                required:true,
            },
            education_graduation:{
                type:String,
                required:true,
            },
            education_post_graduation:{
                type:String,
                required:true,
            },
            skills:{
                type:String,
                required:true,
            },
            project1:{
                type:String,
                required:true,
            },
            about_project1:{
                type:String,
                required:true,
            },
            project2:{
                type:String,
                required:true,
            },
            about_project2:{
                type:String,
                required:true,
            },
            declaration:{
                type:String,
                required:true,
            },
        }
    ],
    tokens:[
        {
          token:{
            type:String,
            required:true,
          }  
        }
    ]
})


// bcrypt the password
userSchema.pre('save',async function(next){
    console.log("hi in the pre function");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
    }
    next();
});

// generating the jwt token

userSchema.methods.generateAuthToken = async function(){
    try{
        let jwttoken = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:jwttoken});
        await this.save();
        return jwttoken;
    }catch(err){
        console.log(err);
    }
}

// creating userResume Data 
userSchema.methods.addResume = async function(name,email,phone,address,github,linkdin,portfolio,education10,education12,education_graduation,education_post_graduation,skills,project1,about_project1,project2,about_project2,declaration){
    try{
        this.resumedata = this.resumedata.concat({name,email,phone,address,github,linkdin,portfolio,education10,education12,education_graduation,education_post_graduation,skills,project1,about_project1,project2,about_project2,declaration});
        await this.save();
        return this.resumedata;
    }catch(err){
        console.log(err);
    }
}




const User = new mongoose.model('USER',userSchema);
module.exports = User;