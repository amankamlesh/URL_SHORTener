const {getUser}=require("../service/auth")

function checkForAuthentication(req,res,next){
    const tokenCookie=req.cookies?.token;
    req.user=null;

    if(!tokenCookie){

    return next();
    }
    const token=tokenCookie
    const user=getUser(token)
    req.user=user;
    return next();
}

function restrictTo(role){
    return function (req,res,next){
        if(!req.user) return res.redirect("/login");

        // console.log(req.user);
        if(!role.includes(req.user.role)) return res.end('UnAuthorized')
           
     return next();       
    }
}

// async function restrictToLoggedinUserOnly(req,res,next){
//     const userUid=req.cookies?.uid;
//     if(!userUid) return res.redirect("/login")

//     const user=getUser(userUid);
//     if(!user) return res.redirect("/login")

//     req.user=user;
//     next();
// }

// async function checkAuth(req,res,next){
//     const userUid=req.cookies?.uid;
//     const user = getUser(userUid);

//     req.user=user;
//     next();
// } 

module.exports={
    // restrictToLoggedinUserOnly,checkAuth
 checkForAuthentication,restrictTo
}