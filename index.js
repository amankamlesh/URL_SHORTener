const express=require("express")
const dotenv=require("dotenv").config()
const path=require('path')
const cookieParser=require("cookie-parser")
const {connectomongo}=require('./connect')
const urlroute=require("./routes/url");
const staticRoute=require("./routes/staticRouter")
const userRoute=require("./routes/user")
const URL=require('./models/user')
const {checkForAuthentication,restrictTo}=require('./middleware/auth')
const app=express();

const PORT=process.env.PORT;
const DB=process.env.DB;

connectomongo(DB)
.then(()=> console.log('mongodb connected!'))

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());
app.use(checkForAuthentication)


// app.get("/test",async(req,res)=>{
//     const allUrls=await URL.find({});
//     return res.render('home',{
//         urls:allUrls
//     })
// })


app.use("/url",restrictTo(["NORMAL","ADMIN"]),urlroute);
app.use("/user",userRoute)
app.use("/",staticRoute)

app.get('/url/:shortid',async(req,res)=>{
    const shortId=req.params.shortid;
    const entry=await URL.findOneAndUpdate(
        {
            shortId,
        },{
            $push:{
                visitHistory:{
                    timestamp: Date.now()
                }
            }
        },{new:true}
    )
    if(!entry){
        return res.status(404).send("Short URL not found")
    }
    res.redirect(entry.redirectURL) 
})

app.listen(PORT,()=>console.log(`Server started at PORT ${PORT}`));
