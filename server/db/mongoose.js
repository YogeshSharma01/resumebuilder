const mongo = require('mongoose');
const DB = process.env.DATABASE;

mongo.connect(DB,{
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useUnifiedToplogy:true,
    // useFindAndModify:false
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>{
    console.log("Successfully Connected to the DATABASE");
}).catch((error)=>{
    console.log("Error in connecting to the DATABASE : ", error);
})