const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authentication');

router.get('/',(req,res)=>{
    res.send("Hi this is Home Page of Resume Builder");
});

router.post('/register',async(req,res)=>{
    try{
        let userData = await User.findOne({email:req.body.email});

        if (userData) {
            res.status(409).send({message:"user with this Email already exists"});
          } else {
            const userData = new User(req.body);
            await userData.save();
            res.status(201).send({message:"user registered successfully"});
          }

    }catch(err){
        console.log(err);
        res.status(500).send({error:"Internal Server Error"});
    }
});

router.post('/signin',async(req,res)=>{
    try{
        let data = await User.findOne({email:req.body.email});
        if(data){
            const isMatch = await bcrypt.compare(req.body.password,data.password);

            const token = await data.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({error:"Invalid Credientials"});
            }else{
                res.json({message:"User Sign In SuccessFully"});
            }
        }else{
            res.status(400).json({error:"Invalid Credientials outSide"});

        }
        
    //     if(data){
    //         if(data.password != req.body.password){
    //             console.log("Incorrect password");
    //             res.status(401).json({ error: "Incorrect password" });
    //         }else{
    //             res.status(200).send("User login successfully");           }
    //     }else{
    //         console.log("User with this Email does not exist");
    //   res.status(404).json({ error: "User not found" });
    //     }

    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

// About us Page
router.get('/about',authenticate,(req,res)=>{
    res.send(req.rootUser);
})
// Contact Page and Home Page
router.get('/getdata',authenticate,(req,res)=>{
    res.send(req.rootUser);
})

router.post('/resumedata',authenticate,async(req,res)=>{
    try{
        const {name,email,phone,address,github,linkdin,portfolio,education10,education12,education_graduation,education_post_graduation,skills,project1,about_project1,project2,about_project2,declaration} = req.body;
        if(!name || !email || !phone || !address || !github || !linkdin || !portfolio || !education10 || !education12 || !education_graduation || !education_post_graduation || !skills || !project1 || !about_project1 || !project2 || !about_project2 || !declaration){
            console.log("Please fill the Resume Form");
            return res.json({error:"please fill the form!"});
        }else{
            const resumeData = await User.findOne({_id:req.userID});
            if(resumeData){
                const userResumeData = await resumeData.addResume(name,email,phone,address,github,linkdin,portfolio,education10,education12,education_graduation,education_post_graduation,skills,project1,about_project1,project2,about_project2,declaration);
                await resumeData.save();
                res.status(201).json({message:"User's Resume created Successfully"});
            }
        }
    }catch(err){
        console.log(err);
    }
});


// Logout Page
router.get('/logout',(req,res)=>{
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send("User logout");
})


module.exports = router;


