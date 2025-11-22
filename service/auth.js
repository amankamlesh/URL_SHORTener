// const sessionIdToUserMap=new Map();
const dotenv=require("dotenv").config()
const jwt=require("jsonwebtoken")
const secret=process.env.JWT_SECRET


function setUser(user){
    // sessionIdToUserMap.set(id,user)
    // const payload={
    //     id,
    //     ...user
    // };
    return jwt.sign({
        _id:user._id,
        email:user.email,
        role:user.role
    },secret)
}

function getUser(token){
    // return sessionIdToUserMap.get(id);
     if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        console.error("JWT verification failed:", error.message);
        return null;
    }
}

module.exports={setUser,getUser}