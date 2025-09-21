const auth = (req,res,next)=>{
    console.log("admin auth called");
    let token = 'abc';
    let isAuthorized = token === 'abc';
    if(isAuthorized){
        next();
    }else{
        res.status(401).send('Unautorized user!!');
    }
}

module.exports = {
    auth
}