const express = require('express');
const {auth} = require('./utils/middleware/auth.js');
const app = express();


// http://localhost:3000/test : will hang rquest
// app.use('/test',(req,res)=>{
//     // res.send("test route 1");
// },(req,res)=>{
//     res.send("test route 2");
// })

// http://localhost:3000/test : will hang rquest
// app.use('/test',(req,res,next)=>{
//     console.log("1")
//     // res.send("test route 1");
//     next()
// },(req,res)=>{
//     console.log("2")
//     res.send("test route 2");
// })

// middlewares
app.use('/admin',auth);

// app.get('/admin',(req,res)=>{
//     console.log("admin handler");
//     res.send('admin route')
// })

// app.get('/admin',auth,(req,res)=>{
//     console.log("new way ");
//     res.send("new route");
// })

// error handler 


app.get('/admin',auth,(req,res)=>{
    // console.log("new way ");
    // res.send("new route");
    throw new Error('bhbhjfb');
    res.send('admin response ');
})

app.use('/',(err,req,res,next)=>{
    if(err){
        res.status(500).send('something went wrong')
    }
})


app.listen(3000,()=>{
    console.log("listening on 3000");
});
